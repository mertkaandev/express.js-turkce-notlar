## Express.js

### İçindekiler

1. [Express.js]()
2. [Express.js Sunucu Oluşturma]()
3. [Express.js Ortam Değişkenleri, Dotenv Paketi ve Esnek Port Yapısı]()
4. [Express.js JSON ve Rest API]()
5. [Express.js Rest API Oluşturmak]()
6. [Express.js Sunucuya Gelen İstekten Veri Okumak]()
7. [Express.js Routing]()
8. [Express.js Middleware]()
9. [Express.js MVC]()
10. [Express.js MVC-Models]()
11. [Express.js MVC-ControllersI]()
12. [Express.js Custom Error Handler]()
---

### 1. Express.js

**Express.js**:

  + Node.js'in `http` modülü üzerine kurulmuş bir Javascript Web Framework'udur.  
  + Express.js ile sağlam ve güçlü arka uç api yazılabilir, dinamik web uygulamaları ve web siteleri geliştirilebilir. Kolay, hızlı ve güçlü web uygulamaları geliştirmeye olanak sağlar. 
  + Express.js ücretsiz ve açık kaynak kodludur. 
  + Node.js'de uzun süren sunucu kurma ve routing işlemleri Express'de daha hızlı ve kolay yapılır.
  + Middleware modüllerine sahiptir.
  + Express.js Node.js uygulamalarına terminalden `npm install express` komutu ile indirilir.

  Not: Express.js'i kullanabilmek için bilgisayarınızda Node.js yüklü olmalıdır. NPM ise Node.js bilgisayara indirildiğinde onunla birlikte inmiş olarak gelir.

---

### 2. Express ile Sunucu Oluşturma

1. Uygulama klasörünüzü açın. Terminalden `npm init -y` komutu ile "Package.json" dosyasını indirin. Ardından terminalden `npm install --save express` komutuyla Express paketini indirin. "index.js" veya farklı bir isimle ana dosyanızı açın. Ana dosya, kodlarınızın çalıştırıldığı dosyadır. Resimde görüldüğü üzere benim ana dosyam index.js'dir. Artık ana dosyanızda Express.js ile hızlı bir şekilde sunucu kurabilirsiniz. Aşağıdaki adımları izleyin

![index](https://user-images.githubusercontent.com/101933251/167837616-8c5999ce-0601-4294-9019-4188cbaf9b75.JPG)
   
2. Express.js paketini `express` isimli bir değişken oluşturup `require()` ile dahil edin. Bu oluşturduğunuz express değişkenine Express.js paketinin özelliklerini dahil eder. Ardından `app` isimli bir değişken oluşturun ve değer olarak oluşturduğumuz `express` değişkenini verin. `express` değişkeni bir önceki satırda `Express.js`'in özelliklerini aldığı için artık `app` değişkeni `Express.js`'in tüm özelliklerini kullanabilecektir ve işlemler `app` değişkeni üzerinden yapılacaktır.

![1](https://user-images.githubusercontent.com/101933251/167837202-88ea76ae-90d7-41da-9e31-7e8ca069c869.JPG)

3. Artık `app` ile işlemlerimizi gerçekleştirebiliriz. `app` ile birlikte `get, post, put, delete` gibi HTTP metotları kullanılır. Express paketi kendi içindeki özellikleriyle web sayfası ve sunucu arasında iletişimi sağlayan HTTP isteklerini yerine getirir. Bu HTTP istekleri en temel açıklamalarıyla şöyledir: 
   
   ```
   + get: sunucudaki bir kaynaktan/dosyadan veri almak için kullanılır.
   + post: sunucudaki bir kaynağa/dosyaya veri gönderir/kaydeder.
   + put: sunucudaki bir kaynağı/dosyayı günceller.
   + delete: sunucudaki bir kaynağı/dosyayı siler.
   ```

4. Sunucudan veri almak ve örnek olması açısından ilk olarak `app.get()`'e bakalım. App değişkenine get metodunu verin. Get metodu iki parametre alacaktır: Birincisi endpoint dediğimiz ve `/` ile başlayan bir url adresidir ki bu her şey olabilir: `/login` veya `/anasayfa` gibi, ikincisi `req` ve `res` parametrelerini alan bir callback fonksiyonudur `(req,res)=>{}`. `req` web sayfasına yapılan istemci isteklerini ve parametrelerini ve daha benzeri birçok şeyi tutan bir nesnedir, `req` ise sunucudan istemciye gönderilecek cevap nesnesidir. Aşağıdaki kod bize "/" adresine gidildiğinde cevap olarak res.send() ile web sayfasına "Merhaba Node.js" mesajı gönderildiğini anlatır.

![2](https://user-images.githubusercontent.com/101933251/167837234-ef887fe0-e0b8-4067-a57d-93fbe7a04a29.JPG)

5. Web sayfasının dinleyeceği Port'u belirtin.

![port](https://user-images.githubusercontent.com/101933251/167836906-d1f25eed-5a34-4fc0-8abd-4f6218178788.JPG)

6. `app` değişkenine `listen()` metodunu atayın. listen() metodu iki parametre alır: Birincisi dinlenilecek port ki bunu değişkende değer olarak belirttik -bu sebeple PORT yazacağız-, ikinci parametre hata oluşmazsa çalışacak callback fonksiyonudur `()=>{}`.

![app listen](https://user-images.githubusercontent.com/101933251/167837288-8b8beed7-6170-43a5-afb5-6cb7cf8a39f8.JPG)

7. `index.js` dosyasını çalıştıracağız ama sunucuyu sürekli tekrar aç-kapat yapmamak için sunucuyu kodlardaki her değişiklikte yeniden çalıştıran `Nodemon` paketini terminalden uygulamaya indirip dahil edin:

![162988041-350e6a34-2990-439d-9162-045d0749bc5b](https://user-images.githubusercontent.com/101933251/168235421-5c347a49-75c6-4021-bbb3-b722a3cf3bc3.png)

8. Nodemon'u bir script olarak package.json dosyasına dahil edin. Package.json dosyasında script kısmına gelin ve içine şu kodu ekleyin (sonuna virgül koymayı unutmayın):

![express 9](https://user-images.githubusercontent.com/101933251/162989126-4292e414-e142-4bc5-b3b6-11b1c7e4e9f5.JPG)

9. Terminale gelin ve şu komutu girerek Nodemon'u çalıştırın:

`npm run dev`

![express 10](https://user-images.githubusercontent.com/101933251/162989360-f02b345d-cb0b-468d-b12b-fa15fee2ecfb.JPG)

10. Tarayıcınızda `localhost:5000` adresine gidin: 

![express local](https://user-images.githubusercontent.com/101933251/162989779-86b2d170-b754-40bf-9333-d855c8e592da.JPG)

**Not: Nodemon'u veya terminali durdurmak için CRTL + S komutunu kullanın.**

---

### 3. Ortam Değişkenleri, Dotenv Paketi ve Esnek Port Yapısı

Bir uygulama geliştirirken uygulamanın her yerinden ulaşılabilecek bazı değerleri tutan dosyaya `.env` dosyası denir. Bu dosya içindeki değerler "environment variables (ortam değişkenleri)" olarak adlandırılır. Bu .env dosyası içindeki değerlere uygulamanın herhangi bir yerinden, herhangi bir yerindkei dosyadan process.env.DEGERADI şeklinde ulaşılabilir. Örneğin bu dosya içinde "PORT = 5000" şeklinde bir değişken oluşturulursa uygulamadaki herhangi bir dosyadan `process.env.PORT` komutuyla bu PORT değerine ulaşılabilir. Node.js'de .env dosyası işlemleri için `dotenv` paketi indirilir.

**Esnek Port Yapısı:** Node.js (+ Express.js) uygulamalarını localhost'da geliştirirken statik bir port değeri verilir ancak bu uygulamalar hosting'e taşındığı zaman bu port değeri çalışmayabilir. Bu sorunun önüne geçebilmek 2 tane port değeri yaratırız. Birinci port değeri `index.js` dosyası içinde değişken olarak tutulan `const PORT = 5000`dir, ikincisi ise .env dosyası oluşturup içinde yaratacağımız `PORT = 3000` değeri olacaktır. 

1. Bu işlemleri gerçekleştirebilmek için `.env` dosyasının konfigürasyonunu yapmamızı sağlayan `dotenv` paketini uygulamaya indirmeliyiz. Terminali açın ve Nodemon çalışıyor ise terminali **CTRL + S** komutu ile durdurun. Terminale şu komutu girerek `dotenv` paketini uygulamaya indirin:

![1 dotenv](https://user-images.githubusercontent.com/101933251/167840421-2d4b5cb3-7106-4127-98ae-5d46f1f2f988.JPG)

2. Ana dizinde `env` adında bir klasör açın ve içine de `config.env` isimli bir dosya açın. "config.env" içinde `PORT = 5000` yazın.

![2 env](https://user-images.githubusercontent.com/101933251/167840440-14ca531a-a613-45fb-adf6-bdbfe7a1edf9.JPG)

3. Ana dosyada (index.js) `dotenv` paketini `require()` ile dahil edin ve `dotenv.config()` ile konfigürasyonu sağlayın. "dotenv.config()" içinde "config.env" dosyasının yolunu obje olarak alır.

![3 dotenv](https://user-images.githubusercontent.com/101933251/167840884-1413680b-95aa-4251-97f7-d66fb0f89cea.JPG)

4. `const PORT` değişkeninin değerini `const PORT = process.env.PORT || 5000` şeklinde düzeltin. Bu `||` veya demektir ve bu kod .env dosyasındaki PORT = 3000 değerini kullan veya sorun oluşursa .env dosyasındaki 5000 değerini kullan anlamına gelir:

![4](https://user-images.githubusercontent.com/101933251/167840992-6100cf36-d8c3-49a1-80d3-193d59ea8522.JPG)

5.  Uygulamanın hangi port'da aktif olarak çalıştığını görmek için `app.listen()` kodundaki callback fonksiyonunda aşağıdaki kodu kullanın ve `npm run dev` yazarak uygulama sunucusunu (Nodemon) çalıştırın. Aşağıdaki kod satırında callback fonksiyonunda Javascript ES6 Template Literals kullanılmıştır ve bu sayede port değerini alınmış ve konsola yazdırılmıştır:

![5](https://user-images.githubusercontent.com/101933251/167841159-59b31893-08ba-4706-a539-42268d641fbf.JPG)

**Uygulamanız için bir .env dosyası oluşturdunuz ve esnek port yapısı oluşturdunuz.**

---

### 4. JSON ve Rest API

+ **JSON:** JavaScript Object Notation anlamına gelir. Basit veri yapılarını temsil etmek için tasarlanmış bağımsız bir veri tutma formatıdır. Package.json dosyası JSON yapısına örnektir. JSON genellikle iki sistem arasındaki veri alışverişi için kullanılır. Örneğin JSON kullanarak sunucu ile web uygulaması arasında veri aktarabilirsiniz. Bir JSON veri formatına örnek:

```
{
"id": "1",
"name": "Mert Kaan",
"mail": "mertkaan@gmail.com"
"details": {
    "city": "İstanbul",
    "age": "21",
}
```

+ **Api**: Application Programming Interface anlamına gelir. Uygulama programlama arayüzü demektir. API'ler bir uygulamanın bir takım fonksiyonlarının başka uygulamalar tarafından kullanılmasını sağlayan arayüzdür. Örneğin Github API kullanmak istersek uygulamamızdan istek atarız ve Github bize kullanıcı bilgilerini REST API olarak döndürür. Api'ler sadece web'e özel değildir. Bir grafik kartı veya masaüstü servisi bile bir api'ye sahip olabilir.

+ **REST API**

Representional State Transfer anlamına gelir. Web applicationlar arasında iletişim sağlamak için kullanılan bir api türüdür. Bir client -bu bir React.js uygulaması, bir Vue.js uygulaması, bir Flutter uygulaması olabilir- back-end'e (sunucu) get isteği gibi belli isteklerde (request) bulunabilir. Bu istek sonucunda back-end'de o isteğe yönelik bir yanıt hazırlanmışsa back-end o isteğe karşılık hazırlanmış yanıtı (response) döner:

![express 12](https://user-images.githubusercontent.com/101933251/162993881-aea63341-b380-491b-a744-1c97fac362e1.jpg)

Rest API, Rest mimarisine dayanır. Rest mimarisine dayalı  inşa edilmiş uygulamalarda ise front-end ve back-end, JSON ile haberleşirler. Yapılan isteklere karşı sunucudan genellikle JSON objesi veya arrayi yanıtları döner ve front-end'e ulaşır. JSON bilgisi yanında text bilgisi de dönülebilir ama uygulamanın ağırlıklı kısmını JSON responseleri oluşturur. 

![express 13](https://user-images.githubusercontent.com/101933251/162993908-4cbe4a55-b246-4126-858e-3dd126dc86a1.jpg)

Kısaca Rest Mimarisi: 

  + Stateless'dir. State yapısı tutmaz. Yani bir kullanıcı api'ye istek attığında bu api rest ise kullanıcının önceki isteklerini kaydetmez. Sadece o anki isteği geri döndürür. Böylelikle rest api daha hızlıdır.
  + Rest api'lara http istekleri atılır.
  + Rest api genellikle JSON objesi döner.
  + Rest api birçok programlama diliyle kullanılabilir.

--- 

### 5. Rest API Oluşturmak

Express.js ile REST Api temelli uygulama inşa etmek için sunucudan istemciye `res.status().json()` şeklinde cevaplar döneriz. `status()` statü kodu olarak HTTP durum kodudur ve 200, 400, 404 gibi duruma bağlı değerler alır. `json()` ise içine aldığı veriyi Json formatına çevirirerek gönderir.

Rest API'yı anlamak için bir örnek yapacağız. Uygulama dosyamızda `data.js` isimli bir dosya olacak ve içinde kullanıcılar verisi tutan bir array olacak. `module.exports = kullanicilar;` ile bu arrayi dışarı çıkarmaya hazır hale getireceğiz ve ana dosyamıza dahil edeceğiz. Belli endpoint'lere (url) gidildiğinde kullanıcıya JSON objesi olarak bu verileri göndermeye çalışacağız. Client bu bilgileri JSON olarak alacak. Bunun için sunucudan client'e response gönderirken `json()` metodunu kullanırız.

![data](https://user-images.githubusercontent.com/101933251/167846231-fd344575-43c0-4ffe-9b6f-9b4ba07da7e7.JPG)

1. Ana dosyamıza (index.js) gidelim ve `require()` ile `data.js`'i dahil edelim. Ardından bir `app.get()` metodu yazacağız. Endpoint adresimiz `/kullanicilar` olacak ve o adrese istek atıldığında statü kodu olarak 200 (ok), ardından json objesi olarak kullanıcılar arrayinin verileri gidecek. Aşağıdaki resimde görüldüğü üzere `/kullanicilar` adresine istek atıldığında sunucu get modunu okur ve response olarak data'yı json olarak gönderir:

```
app.get('/kullanicilar', (req,res)=> {
    res.status(200).json(data)
});
```

![end](https://user-images.githubusercontent.com/101933251/167850270-5540000d-25ae-4e69-b7d4-874de7cc29f0.JPG)

2. `localhost:3000/kullanicilar` adresine gittiğimizde data verisinin json olarak response edildiğini görüyoruz:

![get json](https://user-images.githubusercontent.com/101933251/167847269-ce4eb20a-1962-4f5c-bfed-961bd91c765d.JPG)

3. **Id'ye Göre Response Döndürmek**: Client bütün kullanıcıların verilerini görmek yerine sadece id'si 3 olan kullanıcının bilgilerini görmek isteyebilir. Id bir parametre olarak değişkenlik gösterebilir. Client'in istediği id'si 3 olan veriyi getirebilmek için onun parametre olarak gönderdiği id'yi tutmamız gerekiyor. Bunun için önce `/kullanicilar/:id` endpoint'ini oluştururuz. `/:id` parametredir ve kullanıcının gireceği id adresini yakalamamız ve ona göre sunucudan cevap döndürmemiz gerekir. Bunun için sırasıyla:

   1. `const {id} = req.params` -> Destructuring yöntemiyle id `req.params` sayesinde istemcinin gireceği id değerine sahip olacaktır.

   2. `const kullanici = data.find(kullanici => kullanici.id === parseInt(id))` -> kullanıcı adında bir değişken oluşturulmuştur. kullanıcı değişkeninin değerindeki `find` metodu data arrayinin üzerinde gezinir. Üzerinde gezindiği her bir kullanıcı için `kullanici` değerini verir. Eğer üzerinde gezindiği kullanıcılarda `kullanici.id` değeri istemcinin girdiği id değerine `parseInt(id)` eşit olursa kullanıcıyı bulur ve kullanıcı değişkenine atar. `parseInt()` kullanılmasının sebebi url'den girilen id değerinin string olmasıdır.

   3. `if(kullanici){res.status(200).json(kullanici)}` -> istemcinin girdiği id ile kullanıcı id'si eşleştiyse ve kullanıcı bulunduysa kullanıcının json olarak dönüleceğini belirtir. 

   4. `else {res.status(404).json("Aradığınız kullanıcı bulunamadı")}` -> bulunamazsa kullanıcıya bu cevap dönülecektir.
   

![id](https://user-images.githubusercontent.com/101933251/167850301-4d671e55-2819-4183-b2ba-25fabc01eed4.JPG)

![url](https://user-images.githubusercontent.com/101933251/167850807-18ac13ee-5743-414c-a5cc-c88b34a95412.JPG)

---

### 6. Sunucuya Gelen İstekten Veri Okumak

Sunucu `req.body` ile istemci tarafından gönderilen verileri tutabilir ve buna uygun işlemler yapılabilir. Bir önceki işlemde `req.params` ile gönderilen id parametresini tuttuk ve `req.body` ile de kullanıcının gönderdiği isim, email ve şifre gibi değerler sunucu tarafından tutulabilir. Bunun için Postman gibi API araçlarını deneyebilirsiniz.

---

### 7. Express Routing 

Routing kısaca belli bir endpoint'e yapılan istekten sonra bir fonksiyonun çalıştırılmasına anlamına gelebilir. Express'de Routing işlemleri için `routes` adında bir dosya açılır ve Router özelliği kullanılır. Hem MVC yapısına uygun kod yazılır, hem de routing işlemleri kolay olarak yapılır.

1. Routes adında bir klasör açarak içine routers.js adında bir dosya açtık.

2. Express Router'ini kullanabilmek için dosya içinde önce Express'i dahil ettik, ardından `router` adında bir değişken oluşturarak `express.Router()` değerini verdik. Böylelikle router değişkeni Express Router özelliklerini kullanabilir hale geldi.

```
const express = require("express")
const router = express.Router();
```

3. Index.js'de `app.get` kullanarak yaptığımız routing işlemlerini router dosyasında `router.get` diyerek yapabiliriz. Get isteğini kullandık ve endpoint olarak "/" verdik. Bunun sebebi ana dosyamızda `app.use('/kullanicilar', routers)` kodu yazacak olmamızdandır. Bu kod `/kullanicilar` endpoint'ine gidildiğinde routers'i çalıştır anlamına gelir ve routers içinde endpoint olarak tekrar `/kullanicilar` yazmamıza gerek yoktur. `/` vermek yeterlidir. `/` -> `/kullanicilar`'a denk gelecektir. Aksi durumda router çalışmaz. 

![routes](https://user-images.githubusercontent.com/101933251/168068126-a0bee417-66d9-403c-b938-f9e9ddd48b93.JPG)

4. Index.js'ye gelerek routers'i dahil ettik ve `app.use()` middleware'ini kullandık. Bu `use()` metodu parametre olarak 2 parametre aldı: birincisi endpoint `/kullanıcılar`, ikincisi de ardından çalışacak fonksiyondur ve routers fonksiyonları çalışacaktır.

![app use](https://user-images.githubusercontent.com/101933251/168069102-d1f7374f-f2a8-4f1b-ac09-90c4e1caa4b4.JPG)

5. Tarayıcıda `/kullanicilar/3` adresine istek attığımızda bize id'si 3 olan kullanıcının Json olarak gönderildiğini görüyoruz.

![id](https://user-images.githubusercontent.com/101933251/168243225-7fbf87ce-e66f-45e4-b32f-00f9e29b8b24.JPG)

---

### 8. Express Middleware

Middleware Ara Katman Yazılımıdır. Ard arda gelen ve sırasıyla belirtilen işlemleri yerine getiren mekanizma olarak düşünülebilir. Express, middleware üzerine kurulmuştur. Örneğin bir önceki bölümde oluşturduğumuz Router'i `app.use()` koduyla kullandık ve bu bir Middleware örneğidir. Aynı şekilde `app.use(express.json())` kodu Express'in Json Body Parser özelliğini kullanmamızı sağlar ve bu da Middleware'e bir örnektir.

3 tür Middleware'den bahsedebiliriz: 
    + Express ile gelen Middleware'ler.
    + 3. parti yazılım Middleware'ler (npm install ile uygulamaya yüklediğimiz paketlerdir.).
    + Kendi ihtiyaçlarımız için yazdığımız Custom Middleware

1. Express ile Gelen Middlewareler: Buna `express.json()` örnek verilebilir. `express.json()` istemciden gönderilen bilgilerin Json olarak parse eder. Ana dosyada `app.use(express.json())` şeklinde uygulamaya dahil edilebilir.

2. 3. parti yazılım Middleware'ler: Buna `morgan` paketi örnek verilebilir. `npm install --save morgan` şeklinde uygulamaya indirdiğimizde onu `app.use(morgan())` dediğimizde Morgan'ı bir middleware olarak uygulamaya dahil etmiş oluruz. Artık Morgan paketi özelliklerini kullanabiliriz.

3. Kendi ihtiyaçlarımız için yazdığımız Custom Middleware: Buna Error Handling'i örnek verebiliriz. Bir uygulamada en önemli konu hata yakalamak ve kullanıcıya sağlıklı bir şekilde hatayı iletmektir. Express.js'de `next()` ile hata yakalayıp kendi yarattığımız Custom Error Handler'a gönderebiliriz ve orada hatayı tutup bu hatayı yönetebiliriz.

---

### 9. Express MVC 

Eğer Node.js ve Express.js kullanarak bir back-end geliştirmeyi düşünüyorsanız MVC mimarisini mutlaka kullanmalısınız. Aslında Express.js geliştiriciye herhangi bir mimariyi dayatmaz fakat MVC mimarisini Express.js ile oluşturmak gayet kolaydır. MVC mimarisi back-end'inizi anlaşılır ve modüler kılar. MVC yapısı şöyledir:

  + Models: Model, MVC’de projenin iş mantığının (business logic) oluşturulduğu bölümdür. İş mantığıyla beraber doğrulama (validation) ve veri erişim (data access) işlemleri de bu bölümde gerçekleştirilmektedir. Veritabanı modellemesi vs için bu kısım kullanılır.

  + Views: Uygulamanın arayüzlerinin oluşturulduğu bölümdür. Kullanıcının gördüğü Front-end kısmıdır.

  + Controllers: Controller, MVC’de projenin iç süreçlerini kontrol eden bölümdür. Bu bölümde View ile Model arasındaki bağlantı kurulur. Kullanıcılardan gelen istekler (request) Controller’larda değerlendirilir, isteğin detayına göre hangi işlemlerin yapılacağı ve kullanıcıya hangi View’ın döneceği (response) belirtilir.

**Express'de MVC yapısını kullanacaksanız ve özellikle Rest API ile çalışacaksanız server-client yapısı önerilir. Views yani client, back-end içinde değil ayrı bir dosya hiyerarşisi içinde kendine ait klasörde yapılandırılmalıdır. Client yapısını React.js, Vue.js veya başka bir front-end teknolojisi ile oluşturabilir ve back-end (server)'dan JSON olarak gönderilen bilgileri front-end'de kullanabilirsiniz.**

![168075864-b6dc6706-5e8f-4aec-be86-baf1b199d17c](https://user-images.githubusercontent.com/101933251/168244570-949ce974-35a3-4757-819f-dd9f5b068a18.jpg)

**Controller ve Models klasörlerini back-end içinde oluşturabilirsiniz**

![controllers models](https://user-images.githubusercontent.com/101933251/168245159-6ff41e99-78f7-42a9-acf6-efcd86c1091c.JPG)

---

### 10. Express.js MVC - Models

MongoDB üzerinden ilerleyeceğim. MongoDB, NoSQL ve döküman tabanlı bir veritabanıdır. Veriler döküman içinde JSON formatında tutulur. Node.js ve Express.js uygulamalarında MongoDBa ile çalışabilmek için `mongoose` paketini indirip uygulamaya dahil etmeliyiz:

1. Uygulamanıza `npm install --save mongoose` ile Mongoose indirin.

![mongoose](https://user-images.githubusercontent.com/101933251/168246028-dc6e5dda-b3a9-4327-a4bd-82f4b2ff66e4.JPG)

2. `mongoose.connect()` ile veritabanı bağlantısını gerçekleştirin. Elinizde oluşturulmuş bir MongoDB veritabanı ve bu veritabanı için MongoDB tarafından verilmiş bağlantı linki olmalıdır. Parametre olarak bu bağlantı linkini verin ve ardından `then()` ve `catch()` callback fonksiyonlarını yazarak veritabanı bağlantısını gerçekleştirin.

3. `models` klasörüne gelin ve `User.js` adında bir dosya açın. Veritabanında bir adet User modeli oluşturacağız. Bunun için önce `const mongoose = require("mongoose")` denerek önce Mongoose dahil edilir. Ardından `const Schema = mongoose.Schema;` yazarak bir adet Schema değişkeni oluşturulur. Artık User modelini oluşturmaya hazırız. User modelini oluşturmak için bu Schema'yı kullanacağız ve bunu `new Schema({})` diyerek yapacağız.

`const UserSchema = new Schema({})`

Bundan sonra veriler JSON formatında kaydedileceği için JSON formatında modellemeyi gerçekleştireceğiz. Mongoose gelişmiş bir veritabanı modellemesi sağlar ve bunu öğrenmek için Mongoose dökümanını okuyabilirsiniz. Ben temel bir User modeli oluşturdum ve bu modeli bu kodla çıkartıyorum:

`module.exports = mongoose.model("User", UserSchema);`

![user modeli](https://user-images.githubusercontent.com/101933251/168248024-56577f83-633f-45bf-bf23-e2837bd4c110.JPG)

---

### 11. Express.js MVC - Controllers

Controllers: Controller fonksiyonları kısaca belli bir route'a yapılan istekten sonra çalışacak fonksiyonlar olarak tanımlanabilir ve genel tanımıyla uygulamadaki birçok işlem controller fonksiyonları olarak yazılır. Örneğin '/register' adresine yapılacak istekten sonra login işleminin gerçekleşeceği fonksiyon bir controller olarak yazılabilir.

`/auth/register` routemiz olacak:

 1. Ana dosyamıza gidip `app.use(`/auth`, register)` ile middlewaremizi yazalım.

  ![1](https://user-images.githubusercontent.com/101933251/168253816-354ef1b3-e377-4a11-a9d7-4bf0092d1189.JPG)

 2. Routes'a gidip `register.js` ile register routerini yazalım.

  ![2](https://user-images.githubusercontent.com/101933251/168253840-6ab803ff-d317-4299-b710-476090e6d497.JPG)

 3. Controllers klasöründe `register.js` dosyasına gidip register fonksiyonumuzu yazalım. Asenkron bir işlem olduğundan `async-await` yapısını kullanmıştır.

   ![3](https://user-images.githubusercontent.com/101933251/168253861-fa806fbb-8d20-4ee2-80ad-d860dde0808e.JPG)

 4. Artık `/auth/register` adresinde `post` isteği ile `name, email, password` bilgisi gönderildiğinde veritabanına user modeli kaydedilecektir. 

--- 

### 12. Custom Error Handler

-Güncellenecek-


written by me - tarafımca yazılmıştır / not completed yet - henüz tamamlanmamıştır
