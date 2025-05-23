"use client"
import React, { useState } from 'react';

export default function Test() {
  const [phoneNumber, setPhoneNumber] = useState('263782210021');
  const [message, setMessage] = useState('Hi Mark, how are you? This is a test message from React!');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Function to send WhatsApp message
  const sendWhatsAppMessage = async (to, messageText) => {
    const phoneNumberId = '695655370288748';
    const apiUrl = `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`;
    
    // WARNING: In production, this token should be handled server-side
    const accessToken = 'EAAKK7apmEAYBOZBOk6Czg2l3Rpn1hxXfVdhZBrQgd2zFXDp19XnIY5fHwfq25md1hlf31mMT6NxOYIYlMvfaFs7rQtuf7zWZBiDRlBm66lQ3YeexWtIrr8qugPUJwbsotkqLs3MoQhTvZCOk9sIuRZAbc8GseHQs042TzLT3ElGWZBAZBwumMKrLx2ooxZC9bFXsAsOZCp9bblTcIi94cpsKYAx67UZBjHyLVWUza3DmJ3jGdsJhA9tUbf';

    // Enhanced phone number validation and formatting
    const cleanPhoneNumber = to.replace(/[\s\-\+\(\)]/g, '');
    console.log('🔍 Original phone number:', to);
    console.log('🔍 Cleaned phone number:', cleanPhoneNumber);
    
    // Validate phone number format
    if (!/^\d{10,15}$/.test(cleanPhoneNumber)) {
      throw new Error('Invalid phone number format. Must be 10-15 digits.');
    }

    const requestBody = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: cleanPhoneNumber, // Use cleaned phone number
      type: "text",
      text: {
        preview_url: false,
        body: messageText
      }
    };

    console.log('📤 Sending request to:', apiUrl);
    console.log('📤 Request headers:', {
      'Authorization': `Bearer ${accessToken.substring(0, 20)}...`,
      'Content-Type': 'application/json'
    });
    console.log('📤 Request body:', JSON.stringify(requestBody, null, 2));

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response headers:', Object.fromEntries([...response.headers.entries()]));
      const responseData = await response.json();
      console.log('📥 Full response data:', JSON.stringify(responseData, null, 2));

      if (response.ok) {
        // Check if we got a message ID in the response
        if (responseData.messages && responseData.messages[0] && responseData.messages[0].id) {
          const messageId = responseData.messages[0].id;
          console.log('✅ Message ID:', messageId);
          
          // Additional success indicators
          const contacts = responseData.contacts;
          if (contacts && contacts[0]) {
            console.log('📱 Contact info:', {
              whatsappId: contacts[0].wa_id,
              inputPhone: contacts[0].input
            });
          }
          
          return { 
            success: true, 
            messageId: messageId,
            contactInfo: contacts ? contacts[0] : null,
            data: responseData,
            troubleshooting: {
              phoneNumberUsed: cleanPhoneNumber,
              messageLength: messageText.length,
              timestamp: new Date().toISOString()
            }
          };
        } else {
          console.log('⚠️ Success response but no message ID found');
          console.log('⚠️ This usually indicates the message was not actually sent');
          return { 
            success: false, 
            data: responseData, 
            error: 'No message ID returned - message likely not sent',
            troubleshooting: {
              issue: 'API returned success but no message ID',
              possibleCauses: [
                'Phone number not registered with WhatsApp',
                'Invalid phone number format',
                'WhatsApp Business account issues',
                'API token permissions'
              ]
            }
          };
        }
      } else {
        console.error('❌ API Error Response:', responseData);
        
        // Enhanced error analysis
        let errorMessage = 'Unknown error';
        let troubleshooting = [];
        
        if (responseData.error) {
          errorMessage = responseData.error.message || responseData.error.error_user_msg || 'API Error';
          
          // Common error codes and solutions
          switch(responseData.error.code) {
            case 131026:
              troubleshooting = [
                'Message template not approved or invalid',
                'Check if you need to use a template for this type of message'
              ];
              break;
            case 131047:
              troubleshooting = [
                'Re-engagement message required',
                'User needs to message you first or you need a template'
              ];
              break;
            case 131051:
              troubleshooting = [
                'User phone number not found on WhatsApp',
                'Verify the phone number is correct and has WhatsApp installed'
              ];
              break;
            case 100:
              troubleshooting = [
                'Invalid parameter',
                'Check phone number format and message content'
              ];
              break;
            default:
              troubleshooting = [
                'Check WhatsApp Business API documentation',
                'Verify account permissions and setup'
              ];
          }
        }
        
        return { 
          success: false, 
          error: errorMessage,
          errorCode: responseData.error?.code,
          status: response.status,
          data: responseData,
          troubleshooting: {
            possibleCauses: troubleshooting,
            phoneNumberUsed: cleanPhoneNumber
          }
        };
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      return { 
        success: false, 
        error: 'Network error: ' + error.message 
      };
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    console.log('🔍 Starting WhatsApp message send process...');
    
    try {
      const result = await sendWhatsAppMessage(phoneNumber, message);
      setResult(result);

      if (result.success) {
        console.log('🎉 Message sending completed successfully!');
        if (result.messageId) {
          console.log(`📱 Your message ID: ${result.messageId}`);
        }
      } else {
        console.log('💥 Message sending failed:', result.error);
      }
    } catch (error) {
      console.error('💥 Unexpected error:', error);
      setResult({
        success: false,
        error: 'Unexpected error: ' + error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const validatePhoneNumber = (phone) => {
    // Basic validation for international format without +
    const phoneRegex = /^\d{10,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const isFormValid = phoneNumber.trim() && message.trim() && validatePhoneNumber(phoneNumber);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">WhatsApp Sender</h1>
            <p className="text-gray-600">Send messages via WhatsApp Business API</p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="263782210021"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    validatePhoneNumber(phoneNumber) 
                      ? 'border-gray-300 focus:ring-green-500 focus:border-green-500' 
                      : 'border-red-300 focus:ring-red-500 focus:border-red-500'
                  }`}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {validatePhoneNumber(phoneNumber) ? (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  ) : phoneNumber.trim() && (
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  )}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Enter in international format without the + sign (e.g., 263782210021)
              </p>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message here..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {message.length}/1000 characters
              </p>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || !isFormValid}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                loading || !isFormValid
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 transform hover:scale-[1.02]'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </div>
              ) : (
                'Send WhatsApp Message'
              )}
            </button>
          </div>

          {result && (
            <div className={`mt-6 p-4 rounded-lg border-l-4 ${
              result.success 
                ? 'bg-green-50 border-green-400 text-green-800' 
                : 'bg-red-50 border-red-400 text-red-800'
            }`}>
              {result.success ? (
                <div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <p className="font-semibold">Message sent successfully!</p>
                  </div>
                  {result.messageId && (
                    <div className="mt-3">
                      <p className="text-sm font-mono bg-green-100 p-2 rounded mb-2">
                        Message ID: {result.messageId}
                      </p>
                      {result.contactInfo && (
                        <p className="text-sm">
                          WhatsApp ID: {result.contactInfo.wa_id}
                        </p>
                      )}
                    </div>
                  )}
                  {result.warning && (
                    <div className="mt-3 p-3 bg-yellow-100 border border-yellow-300 rounded">
                      <p className="text-yellow-800 font-semibold">⚠️ Warning</p>
                      <p className="text-yellow-700 text-sm">{result.warning}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <p className="font-semibold">Failed to send message</p>
                  </div>
                  <div className="mt-2 space-y-2">
                    <p className="text-sm">
                      {typeof result.error === 'string' 
                        ? result.error 
                        : result.error?.error?.message || 'Unknown error occurred'
                      }
                    </p>
                    {result.errorCode && (
                      <p className="text-sm font-mono bg-red-100 p-2 rounded">
                        Error Code: {result.errorCode}
                      </p>
                    )}
                    {result.troubleshooting && result.troubleshooting.possibleCauses && (
                      <div className="mt-3 p-3 bg-red-100 border border-red-300 rounded">
                        <p className="font-semibold mb-2">Possible Solutions:</p>
                        <ul className="text-sm space-y-1">
                          {result.troubleshooting.possibleCauses.map((cause, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Common Issues & Solutions</h3>
                <div className="text-sm text-blue-700 space-y-2">
                  <div>
                    <p className="font-medium">Message shows "sent" but user doesn't receive it:</p>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• Phone number isn't registered with WhatsApp</li>
                      <li>• User needs to message your business first (24-hour window rule)</li>
                      <li>• Phone number format is incorrect</li>
                      <li>• WhatsApp Business account not properly verified</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Test with your own WhatsApp number first!</p>
                    <p>Make sure you can receive messages before testing with others.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Open browser console (F12) for detailed debugging information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}