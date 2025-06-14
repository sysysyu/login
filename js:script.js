{\rtf1\ansi\ansicpg932\cocoartf2638
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset128 HiraginoSans-W3;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red236\green241\blue247;\red0\green0\blue0;
\red24\green112\blue43;\red111\green14\blue195;}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c94118\c95686\c97647;\cssrgb\c0\c0\c0;
\cssrgb\c9412\c50196\c21961;\cssrgb\c51765\c18824\c80784;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // DOM
\f1 \'82\'aa\'8a\'ae\'91\'53\'82\'c9\'93\'c7\'82\'dd\'8d\'9e\'82\'dc\'82\'ea\'82\'c4\'82\'a9\'82\'e7\'83\'58\'83\'4e\'83\'8a\'83\'76\'83\'67\'82\'f0\'8e\'c0\'8d\'73
\f0 \cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 document.addEventListener(\cf5 \strokec5 'DOMContentLoaded'\cf0 \strokec4 , () => \{\cb1 \
\cb3     \cf6 \strokec6 const\cf0 \strokec4  loginForm = document.getElementById(\cf5 \strokec5 'loginForm'\cf0 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 const\cf0 \strokec4  usernameInput = document.getElementById(\cf5 \strokec5 'username'\cf0 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 const\cf0 \strokec4  passwordInput = document.getElementById(\cf5 \strokec5 'password'\cf0 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 const\cf0 \strokec4  messageBox = document.getElementById(\cf5 \strokec5 'messageBox'\cf0 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 // 
\f1 \'83\'8d\'83\'4f\'83\'43\'83\'93\'83\'74\'83\'48\'81\'5b\'83\'80\'82\'aa\'91\'97\'90\'4d\'82\'b3\'82\'ea\'82\'bd\'82\'c6\'82\'ab\'82\'cc\'83\'43\'83\'78\'83\'93\'83\'67\'83\'8a\'83\'58\'83\'69\'81\'5b
\f0 \cf0 \cb1 \strokec4 \
\cb3     loginForm.addEventListener(\cf5 \strokec5 'submit'\cf0 \strokec4 , (event) => \{\cb1 \
\cb3         event.preventDefault(); \cf2 \strokec2 // 
\f1 \'83\'74\'83\'48\'81\'5b\'83\'80\'82\'cc\'83\'66\'83\'74\'83\'48\'83\'8b\'83\'67\'91\'97\'90\'4d\'82\'f0\'83\'4c\'83\'83\'83\'93\'83\'5a\'83\'8b
\f0 \cf0 \cb1 \strokec4 \
\
\cb3         \cf6 \strokec6 const\cf0 \strokec4  username = usernameInput.value.trim(); \cf2 \strokec2 // 
\f1 \'83\'86\'81\'5b\'83\'55\'81\'5b\'96\'bc\'82\'dc\'82\'bd\'82\'cd\'83\'81\'81\'5b\'83\'8b\'83\'41\'83\'68\'83\'8c\'83\'58\'82\'f0\'8e\'e6\'93\'be\'82\'b5\'81\'41\'8b\'f3\'94\'92\'82\'f0\'8f\'9c\'8b\'8e
\f0 \cf0 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 const\cf0 \strokec4  password = passwordInput.value.trim(); \cf2 \strokec2 // 
\f1 \'83\'70\'83\'58\'83\'8f\'81\'5b\'83\'68\'82\'f0\'8e\'e6\'93\'be\'82\'b5\'81\'41\'8b\'f3\'94\'92\'82\'f0\'8f\'9c\'8b\'8e
\f0 \cf0 \cb1 \strokec4 \
\
\cb3         \cf2 \strokec2 // 
\f1 \'8a\'c8\'88\'d5\'93\'49\'82\'c8\'83\'4e\'83\'89\'83\'43\'83\'41\'83\'93\'83\'67\'83\'54\'83\'43\'83\'68\'83\'6f\'83\'8a\'83\'66\'81\'5b\'83\'56\'83\'87\'83\'93
\f0 \cf0 \cb1 \strokec4 \
\cb3         \cf6 \strokec6 if\cf0 \strokec4  (username === \cf5 \strokec5 ''\cf0 \strokec4  || password === \cf5 \strokec5 ''\cf0 \strokec4 ) \{\cb1 \
\cb3             displayMessage(\cf5 \strokec5 '
\f1 \'83\'47\'83\'89\'81\'5b
\f0 : 
\f1 \'82\'b7\'82\'d7\'82\'c4\'82\'cc\'8d\'80\'96\'da\'82\'f0\'93\'fc\'97\'cd\'82\'b5\'82\'c4\'82\'ad\'82\'be\'82\'b3\'82\'a2\'81\'42
\f0 '\cf0 \strokec4 , \cf5 \strokec5 'bg-red-100 text-red-700'\cf0 \strokec4 );\cb1 \
\cb3         \} \cf6 \strokec6 else\cf0 \strokec4  \{\cb1 \
\cb3             \cf2 \strokec2 // 
\f1 \'82\'b1\'82\'b1\'82\'c9\'8e\'c0\'8d\'db\'82\'cc\'83\'8d\'83\'4f\'83\'43\'83\'93\'83\'8d\'83\'57\'83\'62\'83\'4e\'81\'69\'97\'e1
\f0 : 
\f1 \'83\'54\'81\'5b\'83\'6f\'81\'5b\'82\'d6\'82\'cc
\f0 API
\f1 \'8c\'c4\'82\'d1\'8f\'6f\'82\'b5\'81\'6a\'82\'f0\'8b\'4c\'8f\'71\'82\'b5\'82\'dc\'82\'b7\'81\'42
\f0 \cf0 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 // 
\f1 \'8d\'a1\'89\'f1\'82\'cd\'83\'66\'83\'82\'83\'93\'83\'58\'83\'67\'83\'8c\'81\'5b\'83\'56\'83\'87\'83\'93\'82\'cc\'82\'bd\'82\'df\'81\'41\'8a\'c8\'92\'50\'82\'c8\'83\'56\'83\'7e\'83\'85\'83\'8c\'81\'5b\'83\'56\'83\'87\'83\'93\'82\'f0\'8d\'73\'82\'a2\'82\'dc\'82\'b7\'81\'42
\f0 \cf0 \cb1 \strokec4 \
\cb3             \cf6 \strokec6 if\cf0 \strokec4  (username === \cf5 \strokec5 'test@example.com'\cf0 \strokec4  && password === \cf5 \strokec5 'password123'\cf0 \strokec4 ) \{\cb1 \
\cb3                 displayMessage(\cf5 \strokec5 '
\f1 \'83\'8d\'83\'4f\'83\'43\'83\'93\'90\'ac\'8c\'f7\'81\'49\'82\'e6\'82\'a4\'82\'b1\'82\'bb\'81\'49
\f0 '\cf0 \strokec4 , \cf5 \strokec5 'bg-green-100 text-green-700'\cf0 \strokec4 );\cb1 \
\cb3                 \cf2 \strokec2 // 
\f1 \'8e\'c0\'8d\'db\'82\'cc\'83\'41\'83\'76\'83\'8a\'83\'50\'81\'5b\'83\'56\'83\'87\'83\'93\'82\'c5\'82\'cd\'81\'41\'82\'b1\'82\'b1\'82\'c9\'83\'8a\'83\'5f\'83\'43\'83\'8c\'83\'4e\'83\'67\'82\'c8\'82\'c7\'82\'cc\'8f\'88\'97\'9d\'82\'f0\'92\'c7\'89\'c1\'82\'b5\'82\'dc\'82\'b7\'81\'42
\f0 \cf0 \cb1 \strokec4 \
\cb3                 \cf2 \strokec2 // 
\f1 \'97\'e1
\f0 : window.location.href = '/dashboard';\cf0 \cb1 \strokec4 \
\cb3             \} \cf6 \strokec6 else\cf0 \strokec4  \{\cb1 \
\cb3                 displayMessage(\cf5 \strokec5 '
\f1 \'83\'47\'83\'89\'81\'5b
\f0 : 
\f1 \'83\'86\'81\'5b\'83\'55\'81\'5b\'96\'bc\'82\'dc\'82\'bd\'82\'cd\'83\'70\'83\'58\'83\'8f\'81\'5b\'83\'68\'82\'aa\'90\'b3\'82\'b5\'82\'ad\'82\'a0\'82\'e8\'82\'dc\'82\'b9\'82\'f1\'81\'42
\f0 '\cf0 \strokec4 , \cf5 \strokec5 'bg-red-100 text-red-700'\cf0 \strokec4 );\cb1 \
\cb3             \}\cb1 \
\cb3         \}\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf2 \strokec2 /**\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2      * 
\f1 \'83\'81\'83\'62\'83\'5a\'81\'5b\'83\'57\'83\'7b\'83\'62\'83\'4e\'83\'58\'82\'c9\'83\'81\'83\'62\'83\'5a\'81\'5b\'83\'57\'82\'f0\'95\'5c\'8e\'a6\'82\'b7\'82\'e9\'8a\'d6\'90\'94
\f0 \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2      * @param \{string\} message - 
\f1 \'95\'5c\'8e\'a6\'82\'b7\'82\'e9\'83\'81\'83\'62\'83\'5a\'81\'5b\'83\'57
\f0 \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2      * @param \{string\} typeClass - 
\f1 \'83\'81\'83\'62\'83\'5a\'81\'5b\'83\'57\'83\'7b\'83\'62\'83\'4e\'83\'58\'82\'c9\'93\'4b\'97\'70\'82\'b7\'82\'e9
\f0 Tailwind CSS
\f1 \'83\'4e\'83\'89\'83\'58\'81\'69\'97\'e1
\f0 : 'bg-green-100 text-green-700'
\f1 \'81\'6a
\f0 \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2      */\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf6 \strokec6 function\cf0 \strokec4  displayMessage(message, typeClass) \{\cb1 \
\cb3         messageBox.textContent = message; \cf2 \strokec2 // 
\f1 \'83\'81\'83\'62\'83\'5a\'81\'5b\'83\'57\'82\'f0\'90\'dd\'92\'e8
\f0 \cf0 \cb1 \strokec4 \
\cb3         messageBox.className = \cf5 \strokec5 `mt-6 p-3 rounded-lg text-center \cf0 \strokec4 $\{typeClass\}\cf5 \strokec5 `\cf0 \strokec4 ; \cf2 \strokec2 // 
\f1 \'83\'4e\'83\'89\'83\'58\'82\'f0\'93\'4b\'97\'70
\f0 \cf0 \cb1 \strokec4 \
\cb3         messageBox.classList.remove(\cf5 \strokec5 'hidden'\cf0 \strokec4 ); \cf2 \strokec2 // 
\f1 \'95\'5c\'8e\'a6\'82\'b7\'82\'e9
\f0 \cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\cb3 \});\cb1 \
\
}