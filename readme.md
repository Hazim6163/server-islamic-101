<div dir="rtl">
  
# Java Script Project to Store Data in MongoDB
 
1. قمت بانشاء TODO في المشروع لتجد كل شيئ للتغيير والتعديل 
2. تشغيل الامر في المشروع   `npm install`    بعد ذلك الامر `npm audit fix` لمعالجه الحزم المتضرره 
3. المشروع يتكون من :

### controllers : 
عباره عن مجموعه functions مهمتها استقبال Requests  وارسال Responses  وهي متخصصه بحسب اذا كان view او API 

### models :
انواع البيانات حيث كل نوع من البيانات يمثله schema خاص به 

### public :
ملفات موقع الويب العامه من css js وصور الخ .... 


### routes :
حيث نحدد الطرق التي تربط ب controllers الخاص بكل مهمه 

### views :
 كل شيئ يخص واجهة للمستخدم 

### app.js : 
نبدا من هذا الملف حيث يتضمن اعدادات السيرفر وطريقه توصيل السيرفر مع قاعده البيانات  
الاعدادات التي يتضمنها الملف الخاصة بالسيرفر : 
1. express router 
2. body-parser
3. Express-session 
4. app port 
5. view engine 
6. MongoDB connecting data 

### token_validate : 
للتحقق من المستخدم هل قام بستجيل الدخول ام لا 

### create MongoDB Cluster : 
بعدها قمت بانشاء حساب جديد على MongoDB 
 من ثم انشاد كلوستر مجاني مشترك 
انشاء حساب جديد لديه صلاحيات الدخول الى قاعدة البيانات 
السماح للدخول من اي عنوان اي بي 
التوصيل الى الكلوستر الخاص من جافا سكربت 

### node app.js
لتشغيل السيرفر قمت بتشغيل هذا الامر لتصفح واجهات الويب وطرق ال Requests 

- - - -
<br>

## النظره النهائيه للقالب مميزات وخصائص :

اذا كان هدفك هو انشاء مكتبه خاصه في MongoDB تضمن خصائص تسجيل الخروج والدخول وادخال البيانات فهذا القالب هو الانسب 
الروابط الموجودة في الاسفل هي روابط الطرق للمشروع .

<br>
<br>

# طريقه انشاء تصنيف جديد
[New Model Commit](https://github.com/Hazim6163/NodeMongoDB/commit/6cc09ef41b45db644f4a1afbdd31339d3a4c07ad)
<br>
[Fix Origin Issue](https://github.com/Hazim6163/NodeMongoDB/commit/8f35247b184e545f403fc7f3b2038b375b13a2ef)
<br><br>

## انشاء ال Model 
قم بنسخ ال Model الخاص بـ User Card من ثم التعديل عليها حسب الخصائص التي تريدها

## انشاء ال Model Controller 
1. اضافة function لاضافه هذا النوع 
2. اضافه function لتعديل هذا النوع 
3. اضافه function للحصول على كل مستندات هذا النوع 
4. اضافه function للحصول على مستند حسب ال id 
5. اضافه function للبحث عن مستند من مكوناته 
6. اضافه function  لحذف مستند 

## من ثم اضافه routes الخاصه بهذا الموديل  

## اختبار الموديل من سكربت خارجي : 
تم بنجاح 




</div>

- - - -

<br><br>

node application template to manage the auth for apps with session support and users, user cards, session in mongoDB Stored .

<br>

# api user links
  1. / user / api / login : post request to login
  2. / user / api / signup : post request to signup
  3. / user / api / confirm : post request to confirm the register email
  4. / user / api / logout : get request to logout 
  5. /user / api / status : get request to get the current user stats

# user view links: 
  1. / user / login : get login page
  2. / user / signup : get signup page
  3. / user / confirm : get confirm register page
  
  <br><br>
