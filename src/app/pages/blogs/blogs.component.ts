import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const articles = [
  {
      "id": "1",
      "title": "Ten Important Medical Tests You Need to Do in Your 30s and 40s",
      "header_image": "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "header_image_cred": "Francisco Venâncio",
      "slug": "ten-important-medical-tests-you-need-to-do-in-your-30s-and-40s",
      "uploaded_by": "02/16/2023",
      "body": `<div class="paragraph">Growing old is a part of life. We all get there at some point, and the key to living a healthy life is to visit the doctor as often as possible. </div>
      <div class="paragraph">Gone are the days when we had to wait until we got sick to see a doctor. Today, <a href='https://www.google.com/url?q=https://www.healthpartners.com/blog/preventive-care-101-what-why-and-how-much/&sa=D&source=docs&ust=1675745791384024&usg=AOvVaw1RJB09rfk2zWX4Au_lZOvv'>preventive health</a> care empowers people to preemptively seek medical care and advice before it becomes a problem.</div>
      <div class="paragraph">As we age, our body processes slow down and become more sensitive to diseases and stress.</div>
      <div class="paragraph">Studies show the <a href='https://news.feinberg.northwestern.edu/2021/06/11/routine-medical-checkups-have-important-health-benefits/'>essence of routine medical tests</a> and screenings when we start hitting the milestone years (our 30s, 40s, and 50s). These medical checkups could be the reason you live long enough to see your great-grandkids and more. 
      So, let’s explore the recommended tests and their benefits.</div>
      <div class="paragraph"><h1>1. Blood Pressure and Cholesterol Screening</h1></div> 
      <div class="paragraph">High blood pressure—aptly called the <a href='https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/high-blood-pressure-the-silent-killer#:~:text=High%20blood%20pressure%20is%20often,attack%2C%20heart%20failure%20and%20stroke.'>silent killer</a>, is responsible for around <a href='https://www.who.int/data/gho/indicator-metadata-registry/imr-details/3155#:~:text=Worldwide%2C%20raised%20blood%20pressure%20is,or%203.7%25%20of%20total%20DALYS.'>12.8% of deaths</a> across the globe.  
      Doctors recommend checking your blood pressure every two years and <a href='https://www.heart.org/en/health-topics/cholesterol/how-to-get-your-cholesterol-tested'>cholesterol level</a> every four to six years when you clock 30. 
      Knowing your BP numbers allow you to manage the condition through medication and lifestyle changes. A normal BP range is anything less than 120/80. 
      </div>
      <div class="paragraph"><h1>2. Full Blood Count (FBC)</h1></div>
      <div class="article-image-container"><img src="https://images.unsplash.com/photo-1638271522560-a247d127deb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80" alt="blood cell image" class="article-image" /></div>
      <div class="credit center">Photo by: <a href="https://unsplash.com/photos/djo3iNJpaOE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">ANIRUDH</a></div>
      <div class="paragraph">Also known as <a href="https://my.clevelandclinic.org/health/diagnostics/4053-complete-blood-count">complete blood count (CBC)</a>, the FBC test evaluates your health and detects multiple medical disorders, like anemia and certain cancer types. </div>
      <div class="paragraph">FBC tests measure various components of your blood, including:</div>
      <div class="paragraph">
      <ul>
      <li>Red blood cells</li>
      <li>White blood cells</li>
      <li>Platelets</li>
      <li>Hematocrit, and</li>
      <li>Hemoglobin levels.</li> 
      </ul>
      </div>
      <div class="paragraph">This medical test is vital if you suffer from iron deficiency and require daily supplementation. As a result, the FBC test allows your doctor to monitor your condition and treatments.  
      </div>
      <div class='paragraph'><h1>3. Lipid Profile</h1></div>
      <div class='paragraph'>The <a href='https://my.clevelandclinic.org/health/diagnostics/17176-lipid-panel'>lipid profile</a> examination measures your total cholesterol, triglycerides, low-density lipoproteins (LDL), and high-density lipoproteins (HDL). 
      </div>
      <div class='paragraph'>These medical tests measure your cholesterol levels and determine your risks for coronary heart diseases. </div>
<div class='paragraph'>Doctors recommend frequent lipid profile screenings (every year) if you fall under these risk factor categories:</div>
<div class='paragraph'>
<ul>
<li>Obese</li>
<li>Diabetic or hypertensive</li>
<li>Smoking cigarettes</li>
<li>Over 45 (for men) and over 50 (for women)</li>
</ul>
</div>
<div class='paragraph'><h1>4. Liver and Kidney Function Tests
</h1></div>
<div class='paragraph'>Annual screenings for <a href='https://my.clevelandclinic.org/health/diagnostics/17662-liver-function-tests'>liver function tests</a> help you detect and manage liver conditions like Hepatitis C and B, fatty liver, or liver damage from excessive alcohol consumption. This blood test measures different enzymes and proteins in the body to detect how well your liver is functioning.
</div>
<div class='paragraph'><a href='https://my.clevelandclinic.org/health/diagnostics/21659-kidney-function-tests#:~:text=A%20note%20from%20Cleveland%20Clinic&text=Healthy%20kidneys%20assist%20with%20removing,blood%20tests%20or%20urine%20tests.'>Kidney function tests</a> help determine your kidney’s health and how fast it clears waste from your system. It usually involves a 24-hour urine sample or blood test. </div>
<div class='paragraph'><h1>5. ECG/EKG Test</h1></div>
<div class='article-image-container'><img src='https://images.unsplash.com/photo-1513224502586-d1e602410265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80' alt='article image' class='article-image' /></div>
<div class='credit center'>Photo by: <a href='https://unsplash.com/photos/0lrJo37r6Nk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Jair Lázaro</a></div>
<div class='paragraph'>An <a href='https://my.clevelandclinic.org/health/diagnostics/16953-electrocardiogram-ekg'>Electrocardiogram (ECG) test</a> detects irregular heartbeats, <a href='https://www.nhs.uk/conditions/arrhythmia/'>arrhythmias</a> and other heart-related diseases. It checks your heart’s rhythm and electrical signals. </div>
<div class='paragraph'>You need an ECG test when you have:</div>
<div class='paragraph'>Constant chest pains</div>
<div class='paragraph'>
<ul>
<li>Difficulty breathing</li>
<li>Uneven heartbeats/unusual sounds</li>
<li>Family history of heart diseases</li>
<li>A Pacemaker </li>
</ul>
</div>
<div class='paragraph'><h1>6. Pap Smear (For Women)</h1>
<div class='paragraph'>This physical exam is recommended for every sexually active female once they reach 21 years. It’s vital in your 30s since it helps catch pre-cancerous changes in your cervix. 
</div>
<div class='paragraph'>A <a href='https://my.clevelandclinic.org/health/diagnostics/4267-pap-smear'>pap smear test</a> detects abnormal cells before they become dangerous and helps prevent cervical cancer. This pelvic examination also checks for the <a href='https://my.clevelandclinic.org/health/diseases/11901-hpv-human-papilloma-virus'>Human Papillomavirus (HPV)</a> and other sexually transmitted diseases that cause cervical cancer. </div>
<div class='paragraph'><h1>7. Prostate Cancer Test (For Men)
</h1> </div>
<div class='paragraph'>Prostate cancer develops slowly and doesn’t reveal symptoms for many years until the prostate gland swells up. When this happens, you have an increased urge to urinate or notice a strain while peeing. 
Common prostate tests include:</div>
<div class='paragraph'> 
<ul>
<li><b>PSA Testing</b>: A blood test that measures your <a href='https://www.webmd.com/prostate-cancer/guide/psa'>prostate-specific antigen (PSA)</a> levels</li>
<li>Digital Rectal Examination (DRE): A physical exam where the doctor inserts a gloved finger into the rectum to examine the prostate for changes</li>
<li>A <a href='https://www.nhs.uk/conditions/biopsy/'>biopsy</a> and an MRI scan</li>
</ul>
</div>
<div class='paragraph'>It’s best to go for a prostate screening in your 40s and 50s if you’re at high or average risk for prostate cancer.  </div>
<div class='paragraph'><h1>8. Mammogram (For Women)
</h1></div>
<div class='paragraph'>
A <a href='https://www.cdc.gov/cancer/breast/basic_info/mammograms.htm'>mammogram</a> is an x-ray imaging of the breast to detect tumors and cysts that are difficult to detect by touch alone. This medical test helps you discover breast cancer in its early stages after removing the suspicious tissues. 
Doctors recommend regular screenings every two years. However, if you have <a href='https://www.cdc.gov/cancer/breast/basic_info/risk_factors.htm'>high-risk factors</a> for the disease or have abnormal reports, they might ask you to perform the test more frequently. 
</div>
<div class='paragraph'><h1>9. Colonoscopy Screening
</h1></div>
<div class='paragarph'>A <a href='https://my.clevelandclinic.org/health/diagnostics/4949-colonoscopy'>colonoscopy</a> detects colon cancer by observing polyps and lesions in the large intestine. This test allows the medical examiner to inspect the inside of your colon and rectum. 
Other alternatives to the colonoscopy examination include stool tests like <a href='https://www.webmd.com/colorectal-cancer/guide/fecal-occult-blood-test'>fecal occult blood test (FOBT)</a> and <a href='https://medlineplus.gov/ency/patientinstructions/000704.htm'>fecal immunochemical test</a> (FIT). 
</div>
<div class='paragraph'><h1>10. HIV and STI Screenings
</h1></div>
<div class='paragraph'>Regular HIV and <a href='https://www.mayoclinic.org/diseases-conditions/sexually-transmitted-diseases-stds/in-depth/std-testing/art-20046019'>STD testing</a> are essential if you have multiple partners or want to get pregnant. Untreated sexually transmitted diseases can cause infertility, genital warts/herpes, HPV, or certain kinds of cancer</div>
<div class='paragraph'><h1>Final Thoughts
</h1></div>
<div class='paragraph'>Prevention is paramount in any health-related issue. Screening tests allow you to catch a medical condition before it manifests symptoms. 
Routine medical tests and physical exams are essential to living long and healthy lives. Get tested today. 
</div>
      `
  },
  {
    "id": "2",
    "title": "The Pros and Cons of Following a Vegetarian Diet in Nigeria",
    "header_image": "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "header_image_cred": "Engin Akyurt",
    "slug": "the-pros-and-cons-of-following-a-vegetarian-diet-in-nigeria",
    "uploaded_by": "02/16/2023",
    "body": `
    <div class="paragraph">What's the first thing that comes to mind when a Nigerian tells you they follow a vegetarian diet? </div>

<div class="paragraph">You'll probably ask them why and if they have any health condition that requires vegetarianism. And if they don't have any health issues requiring this lifestyle, you start wondering why.  </div>

<div class="paragraph">Being a vegetarian in Nigeria sounds foreign to many people, but it comes with some perks. Studies show that <a href="https://www.sciencedirect.com/topics/food-science/plant-based-food">plant foods are nutritionally superior</a> to other food sources. They are high in fiber and contain most of the essential vitamins we need to live healthy lives. </div>

<div class="paragraph">However, plant foods lack some essential nutrients we can only find in specific animals. For example, you can't find calcium, iron, or vitamins D and B12 in many plant-based foods. </div>

<div class="paragraph"><h1>What's a Vegetarian Diet?<h1></div>

<div class="paragraph">It's a diet that omits meat—and in extreme cases, poultry and dairy products from a meal plan. We have different forms of vegetarianism, ranging from veganism to a flexitarian diet. 

Let's explore the most popular ones. </div>

<div class="paragraph"><h1>1. Veganism</h1></div>

<div class="paragraph">The vegan diet is the most restrictive of the six because it requires the complete exclusion of all animal products. It's more of a lifestyle preference than a diet.

Since it excludes all animal-derived products, you can't eat eggs, fish, or dairy products. </div>

<div class="paragraph"><h1>2. Ovo-vegetarianism</h1></div>

<div class="paragraph">This category is similar to veganism as it excludes meat, seafood, poultry, and dairy from your diet. However, Ovo-vegetarianism allows you to eat eggs and foods containing eggs. </div>

<div class="paragraph"><h1>3. Lacto-vegetarianism</h1></div>

<div class="paragraph">As the name implies, Lacto-vegetarianism excludes all meat and poultry food form from the diet while allowing dairy products. So, you can have milk, yogurt, butter, cheese, and more while following this vegetarian diet. </div>

<div class="paragraph"><h1>4. Lacto-ovo-vegetarianism</h1></div>

<div class="paragraph">This traditional vegetarian diet excludes meat and fish but includes egg and dairy products. 
Like Vegans, Lacto-ovo-vegetarians don't condone the brutal and inhumane killing of livestock. However, they accept animal by-products (egg and dairy) from animals treated properly.  </div>

<div class="paragraph"><h1>5. Pescetarianism</h1></div>

<div class="paragraph">Pescatarians avoid meat and poultry but accept fish and other seafood. Some pescatarians include dairy and eggs in their diet as a personal choice. 

The pescatarian diet is beneficial because it allows you to get essential nutrients like the <a href="https://www.healthline.com/nutrition/17-health-benefits-of-omega-3#TOC_TITLE_HDR_6">omega-3 fatty acids</a> from fish and seafood. The other diets don't offer this benefit. </div>

<div class="paragraph"><h1>6. Flexitarianism</h1></div>

<div class="paragraph">Following this diet allows you to choose which food groups to exclude and include in your diet. As the name implies, <a href="https://www.healthline.com/nutrition/flexitarian-diet-guide#benefits">flexitarianism</a> was designed to be more flexible than the other vegetarian diets.

While it focuses on a plant-based first diet, flexitarianism allows you to include meat and some animal products (dairy and eggs) in moderation. 

Most hard-core vegetarians and vegans don't count the flexitarians as part of the group.

You can find more on the different vegetarian diets <a href="https://www.healthline.com/nutrition/types-of-vegetarians">here</a>.
</div>
      <div class="article-image-container"><img src="https://images.unsplash.com/photo-1498601761256-9e93c6f5c181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" alt="food image" class="article-image" /></div>

<div class="paragraph center">Photo by: <a href="https://unsplash.com/photos/9aUU5PGZfxY">Toa Heftiba</a></div>

<div class="paragraph"><h1>The Benefits and Disadvantages of Vegetarianism</h1></div>

<div class="paragraph">Becoming a vegetarian has its perks, like weight loss and reduced risk of chronic diseases, but it still has its limitations. 

The pros cover vegetarian benefits, while the cons explore the downside of the diet. </div>

<div class="paragraph"><h2>Pros</h2></div>
<div class="paragraph">
<ul>

<li>It helps you lower your disease risks</li>

<li>It supports weight loss</li>

<li>Increased lifespan</li>

<li>40% <a href="https://www.insider.com/eating-less-meat-vegan-vegetarian-linked-lower-cancer-risk-study-2022-2">less likely to get cancer</a> </li>

<li>Improved blood sugar levels</li>

<li>You'll save money (with the rising price of meat and poultry animals). </li>
</ul>
</div>

<div class="paragraph"><h2>Cons </h2></div>
<div class="paragraph">
<ul>

<li>Following a vegetarian diet requires serious planning and preparation</li>

<li>It isn't easy to maintain</li>

<li>You'll lack some essential vitamins and minerals (e.g., Vit B12, calcium, iron, and omega-3 fatty acids) </li>

<li>Not enough access to quality vegetables (broccoli, spinach, kale, cauliflower, etc.)</li>

<li>It'd be difficult finding quality ingredients for <a href="https://www.healthline.com/nutrition/foods-vegans-eat">vegan meals</a>.</li>
</ul>
</div>

<div class="paragraph"><h1>Bottom Line</h1></div>

<div class="paragraph">The key to enjoying a vegetarian/vegan diet is choosing the one that works best for your lifestyle. And whatever you do, ensure you give your body the essential nutrients it needs to function properly. </div>

<div class="paragraph">Think you can become a vegetarian? You might want to consider starting small. Try out the flexitarian or pescatarian diet first, and proceed from there. </div>    
    `
  },
  {
    "id": "3",
    "title": "Debunking Myths about Sugar Consumption: Managing your Sugar Levels",
    "header_image": "https://images.unsplash.com/photo-1628619876503-2db74e724757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80",
    "header_image_cred": "Myriam Zilles",
    "slug": "debunking-myths-about-sugar-consumption",
    "uploaded_by": "02/18/2023",
    "body": `
    <div class='paragraph'>Too much sugar is bad for your health, right?</div>

<div class='paragraph'>At least that's what they told us growing up. But, of course, it still didn't stop us from consuming sweets and sugary confectionaries. But, we did this with a nagging voice at the back of our minds (most definitely our mother's voice), warning us of the consequences. </div>

<div class='paragraph'>The body needs an <a href="https://www.wellandgood.com/how-much-sugar-a-day/">adequate amount of sugar</a> to function properly, so we can't cut off sugar entirely from our diets. Therefore, it's essential to devise a well-rounded knowledge of sugar and figure out how much to consume daily. It also helps to understand the difference between added sugars and natural ones. 
In the spirit of not tossing out every food with sugar in it, here are some popular sugar myths to debunk. </div>

<div class='paragraph'><h1>Myth #1 Consuming Too Much Sugar Gives you Diabetes</h1></div>

<div class='paragraph'>Too much sugar doesn't necessarily cause diabetes, but it plays a role. The two biggest contributors to diabetes are genetics and lifestyle choices. </div>

<div class='paragraph'><a href="https://my.clevelandclinic.org/health/diseases/7104-diabetes-mellitus-an-overview">Diabetes</a> occurs when your blood glucose level is high, and your body can't produce enough insulin to manage it. </div>

<div class='paragraph'>Your chances of getting diabetes increase if it runs in your family and you lead an unhealthy life (e.g., smoking, not exercising, or obesity). It means you're safe if you don't have any <a href="https://www.cdc.gov/diabetes/basics/risk-factors.html">risk factors</a>. But, that doesn't mean you should over-indulge in refined sugar. </div>

<div class='paragraph'><p>Myth #2: All Sugar is Bad, Including Sugary Fruits</h1></div>

<div class='paragraph'>This myth is among the most dangerous since it makes people miss out on nutrient-dense fruits. </div>

<div class='paragraph'>There are <a hregars (fructose and glucose) alongside other essential vitamins and minerals.</div>

<f="https://www.goodhousekeeping.com/food-recipes/healthy/a18910/types-of-sugar-0921/">different kinds of sugar</a>, natural sugar, and artificial or refined ones. Fruits contain natural sudiv class='paragraph'>And your body needs these to function properly. However, you can avoid or reduce refined (added) sugar or artificial flavors. </div>

<div class='paragraph'>While cutting sodas and candies from our diets would be helpful, fruits are still essential. Removing fruits from your diet to reduce sugar intake is a bad idea. </div>


      <div class="article-image-container"><img src="https://images.unsplash.com/photo-1631209121750-a9f656d28f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="blood cell image" class="article-image" /></div>

<p>Photo by: <a href="https://unsplash.com/photos/K0efSg5xy9w?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditShareLink">Mk. s</a></p>

<div class='paragraph'><h1>Myth #3: Sugar Causes Hyperactivity in Kids</h1></div>

<div class='paragraph'>Many parents subscribe to the notion that sugar causes hyperactivity in their children. This belief stems from the ideology of allergist Benjamin Feingold that sugar makes kids hyperactive and restless. His <a href="https://www.webmd.com/add-adhd/childhood-adhd/what-is-the-feingold-diet">Feingold Diet</a> advocated eliminating sugar and artificial flavoring from children's meals. </div>

<div class='paragraph'>Other <a href="https://www.medicalnewstoday.com/articles/medical-myths-does-sugar-make-children-hyperactive#Where-did-this-idea-begin?">studies</a> debunked Feingold's notion, revealing evidence that contradicted his theory. </div>

<div class='paragraph'>So far, no scientific evidence proves sugar makes kids hyperactive. Apparently, the term "sugar high" is misleading, and children are naturally excitable and hyperactive, especially around other kids. </div>

<div class='paragraph'><h1>Myth #4: Sugar is Addictive</h1></div>

<div class='paragraph'>According to this <a href="https://pubmed.ncbi.nlm.nih.gov/27372453/">scientific study</a>, there is little to no scientific proof to back this claim. While our bodies rely on sugar (glucose) to run, we aren't as dependent on it to term it an addictive substance. </div>

<div class='paragraph'>Some experts have likened sugar addiction to drug addiction because of how they induce reward and cravings in the brain.  </div>

<div class='paragraph'>Besides, it's easier to cut off sugary foods from our diets than to kick a cocaine or heroin addiction. </div>

<div class='paragraph'><h1>Myth #5: Sugar Causes Cavities and Tooth Decay</h1></div>

<div class='paragraph'>Sugar on its own doesn't give you <a href="https://my.clevelandclinic.org/health/diseases/10946-cavities">cavities</a>. However, not brushing your teeth after eating causes acidic foods and drinks to wear out your teeth's enamel. </div>

<div class='paragraph'>When you consume sugary food, the bacteria in your mouth also feed on it, leaving an acidic residue. And when you don't brush or floss afterward, the acid dissolves your tooth's <a href="https://www.webmd.com/oral-health/guide/tooth-enamel-erosion-restoration#:~:text=Enamel%20is%20the%20thin%20outer,can%20see%20light%20through%20it.">enamel</a>, creating holes or cavities. </div>

<div class='paragraph'>Good oral hygiene prevents tooth decay. </div>

<div class='paragraph'><h1>How to Manage Your Blood Sugar Levels</h1></div>

<div class='paragraph'>Since high blood sugar causes prediabetes and diabetes, finding healthy ways to lower it is key. </div>

<div class='paragraph'>You can manage your blood sugar levels by:</div>
<div class='paragraph'>
<ul>

<li>Regulating caloric intake and portion control</li>

<li>Eating magnesium and <a href="https://www.healthline.com/nutrition/chromium-foods#2.-Whole-wheat-flour">chromium-rich foods</a></li>

<li>Consuming <a href="https://www.healthline.com/nutrition/11-super-healthy-probiotic-foods">foods rich in probiotics</a></li>

<li>Tracking blood glucose levels (make adjustments when necessary)</li>

<li>Staying hydrated</li>

<li>Managing carbohydrate intake</li>

<li>Consuming fiber-rich foods</li>

<li><a href="https://pubmed.ncbi.nlm.nih.gov/34751700/">Exercising regularly</a></li>
</ul>
</div>

<div class='paragraph'><h1>Final Thoughts</h1></div>

<div class='paragraph'>It helps to remember that your health isn't about one thing. There are other factors to consider asides from sugar. </div>

<div class='paragraph'>Eating a balanced diet and exercising will also go a long way to improving your health and lifestyle. </div>

<div class='paragraph'>However, the solution to every sugar myth is moderation. And it works for almost every problem out there. </div>
    `
  },
  {
    "id": "4",
    "title": "5 Health Benefits of Dairy Foods",
    "header_image": "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_960_720.jpg",
    "header_image_cred": "1195798",
    "slug": "5-health-benefits-of-diary-foods",
    "uploaded_by": "02/18/2023",
    "body": `
    
<div class='paragraph'>The importance of dairy foods as a source of nutrients for developing kids and teenagers is widely recognized. The United States Department of Agriculture, among other health organizations, recommends consuming dairy products. They are also an excellent source of vitamins, protein, and calcium, for older adults. </div>

<div class='paragraph'>Conflicting scientific evidence regarding the healthfulness of dairy consumption exists as dairy product consumption is questioned by more than half of the world's population, who claim that it is difficult to digest. In general, they have been found to be beneficial which is discussed in this article.</div>

<div class='paragraph'><h1>What Are Dairy Foods?</h1></div>

      <div class="article-image-container"><img src="https://images.pexels.com/photos/7646663/pexels-photo-7646663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="parfait image" class="article-image" /></div>

<div class='credit center'><p>Photo by <a href="https://www.pexels.com/photo/glasses-with-yogurt-verrine-with-granola-7646663/">Valeria Boltneva</a></div>

<div class='paragraph'>In recent years, dairy foods have gained a lot of attention.<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4703621/"> It has a long history of being a good source of calcium and protein</a>.</div>

<div class='paragraph'>Foods containing the milk of animals, like cows and sheep are referred to as dairy foods. While most dairy products are made from cow's milk around the world, other animals like goats and buffaloes can also be good sources. </div>

<div class='paragraph'>Dairy products other than milk that are frequently consumed worldwide are cheese, whey, yogurt, dairy milk, sour cream, butter, casein, condensed milk, ice cream, and cream cheese.</div>

<div class='paragraph'><h1>Health Benefits of Dairy Foods</h1></div>

 <div class="article-image-container"><img src="https://images.pexels.com/photos/6164185/pexels-photo-6164185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="parfait image" class="article-image" /></div>

<div class='credit center'><p>Photo by: <a href="https://www.pexels.com/photo/unrecognizable-person-having-breakfast-at-table-with-coffee-and-muesli-6164185/">Maria Bortolotto</a></div>

<div class='paragraph'>Vitamins A, B12, and D, as well as calcium, carbohydrates,  phosphorus, protein, potassium, riboflavin, and niacin, are all abundant in dairy products. </div>

<div class='paragraph'>They provide several health benefits beyond helping to maintain and create strong bones and teeth. Blood pressure,  the heart, and a healthy weight can all benefit from getting enough milk, yogurt, and cheese.</div>

<div class='paragraph'>These are the top 5 health benefits of dairy products;</div>

<div class='paragraph'><h1>1. Good for the bones</h1></div>

<div class='paragraph'>The most abundant source of calcium in the human diet is dairy, which is also the key mineral in your bones. Dairy, therefore, provides various health benefits for bones. To acquire enough calcium for your bones, <a href="https://www.myplate.gov/eat-healthy/dairy">health authorities</a> advise consuming 2 to 3 portions of dairy every day. </div>

<div class='paragraph'>Additionally, dairy products are a good source of protein and phosphorus, which are essential for skeletal growth and bone maintenance as you grow.</div>

<div class='paragraph'><h1>2. Helps to Control Body Weight</h1></div>

<div class='paragraph'>To maintain healthy body weight, one must balance the energy consumed from food with the energy expended through exercise. Various impacts on body weight have been linked to dairy products. </div>

<div class='paragraph'>According to<a href="https://link.springer.com/article/10.1007/s00223-015-0062-x"> research,</a> dairy products, especially when consumed along with a low-calorie diet, may enhance body composition by decreasing fat mass, expanding the waist, and boosting lean body mass.</div>

<div class='paragraph'><h1>3. Boosts The Immune System</h1></div>

<div class='paragraph'>Dairy products are crucial to maintaining a healthy balanced diet and boosting immunity to prevent developing serious diseases. A reduction in the risk of hypertension has been related in numerous studies to three daily portions of milk, cheese, and yogurt. </div>

<div class='paragraph'>Probiotics are helpful microorganisms that have health advantages, and they are present in cultured foods like yogurt.  According to <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5867544/">studies,</a> consuming them may result in lowered chances of high blood pressure and heart disease.</div>

 <div class="article-image-container"><img src="https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="parfait image" class="article-image" /></div>

<div class='credit center'><p>Photo by: <a href="https://www.pexels.com/photo/tasty-healthy-dessert-with-berries-served-on-pink-table-with-wooden-spoon-5945660/">Any Lane</a></div>


<div class='paragraph'><h1>4. Helps to Lower The Risk of Cavities</h1></div>

<div class='paragraph'>More than merely maintaining proper oral hygiene is necessary to achieve dental health. Dental health is also supported by a healthy diet and eating routine. Given the distinctive combination of anti-decay elements, including the protein casein, calcium, and phosphorus, that dairy foods provide, they have a special place in oral health.</div>

<div class='paragraph'>Hard cheese has been associated with a lower incidence of tooth deterioration and cavities, making it an excellent snack between meals. Milk has also been connected to a lower risk of cavities.</div>

<div class='paragraph'><h1>5. Source of Energy</h1></div>

<div class='paragraph'>Calcium is one of the many vitamins and minerals found in milk and other dairy products, which also make them good sources of energy and protein. </div>

<div class='paragraph'>It is common knowledge that consuming protein after working out aids in the development of lean muscle mass, but not all proteins are that effective. Milk contains whey and casein proteins which aid in maintaining or increasing muscle mass and are the most often used ingredients in dietary supplements.</div>

<div class='paragraph'><h1>Conclusion</h1></div>

<div class='paragraph'>To maintain balance in your diet and to benefit from the long-term health benefits of dairy, keep to reduced fat and low sugar products. </div>

<div class='paragraph'>Many people have digestive problems with milk or avoid it out of personal preference. However, high-quality milk and dairy products have been shown to have a number of health benefits for those who can take them.</div>
    `
  },
  {
  "id": "6",
    "title": "Five Benefits of Exercise on your Mental Health",
    "header_image": "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80",
    "header_image_cred": "Total Shape",
    "slug": "five-benefits-of-exercise-on-your-mental-health",
    "uploaded_by": "02/21/2023",
    "body": `
<div class="paragraph">The path to complete healing starts in the mind and then manifests physically. When people hear the term exercise, they immediately think of physical fitness and wellness, and you know what? They are not mistaken. </div>

<div class="paragraph">But a sound body cannot come from an ill mind, nor can the opposite be said for the other way around. </div>

<div class="paragraph">Many people now recognize that the relationship between your mental state and your physical health is not mutually exclusive; as a result, anything bad for your mind will also harm your body and vice versa. </div>

<div class="paragraph"><h1>What is Mental Health?</h1></div>

 <div class="article-image-container"><img src="https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="article image" class="article-image" /></div>

<div class='credit center'><p>Photo by: <a href="https://unsplash.com/photos/rXrMy7mXUEs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditShareLink">Joice Kelly</a></div>

<div class="paragraph">The Diagnostic and Statistical Manual of Mental Diseases (DSM) and the International Classification of Diseases (ICD) <a href="http://repository.poltekkes-kaltim.ac.id/657/1/Diagnostic%20and%20statistical%20manual%20of%20mental%20disorders%20_%20DSM-5%20%28%20PDFDrive.com%20%29.pdf">define emotional and behavioral symptoms</a> as part of mental disorders. These include substance abuse and dependence, behavior disorder, schizophrenia, depression, anxiety disorders, and attention deficit hyperactivity disorder (ADHD). But the absence of these extreme disorders doesn't guarantee a healthy mental state. </div>

<div class="paragraph">The surge in mental health awareness since the turn of the century has seen new definitions for mental health. The World Health Organization (WHO) <a href="https://www.paho.org/en/topics/mental-health#:~:text=The%20World%20Health%20Organization%20(WHO,to%20his%20or%20her%20community%E2%80%9D.">defines mental health</a> as "a state of well-being in which the individual realizes his/her own abilities, and can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community."</div>

<div class="paragraph">By this definition, your mental health isn't determined by lack of stress factors but by how you handle it. </div>

<div class="paragraph"><h1>The Mind-Body Dynamic</h1></div>

<div class="paragraph">While our feelings may seem confined to the mind's domain, they manifest through our bodies. </div>

<div class="paragraph">For example, if you feel excited, your heart rate may go up, your muscles relax, your mind interprets your excitement, and more endorphins are released. </div>

<div class="paragraph">On the other hand, if you are in a place where you aren't comfortable, then you might tense, become closed up, your heart rate may go up, and develop a head or stomach ache, heartburn, etc., which will, in turn, heighten your stress and on and on the vicious cycle goes. </div>

<div class="paragraph">Exercise is an established means of developing the body, enhancing muscle strength, delivering oxygen and nutrients to tissues, and revitalizing your respiratory system. </div>

<div class="paragraph">The physical markers such as better control over your heart rate and pulse, increased stamina, etc., are directly connected to your mental state. This relationship is the not-so-subtle connection between the mind, the body, and exercise.</div>

<div class="paragraph"><h1>Benefits of exercise to your mental health </h1></div>

 <div class="article-image-container"><img src="https://images.unsplash.com/photo-1616279967983-ec413476e824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80" alt="article image" class="article-image" /></div>

<div class='credit center'><p>Photo by: <a href="https://unsplash.com/photos/y7ywDXWJ-JU?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditShareLink">Graham Mansfield</a></div>

<div class="paragraph">Physical activity can help prevent negative emotions, improve psychological health, avoid anxiety and depressive symptoms, the onset of anxiety disorders, and delay the effects of dementia and aging-related cognitive decline. </div>

<div class="paragraph">Let's have a more detailed look at the how. </div>

<div class="paragraph"><h1>1. Exercise Alleviates Stress and Anxiety</h1></div>

<div class="paragraph">Stress is a precursor for mental illnesses such as anxiety and depression. Some exercises that help with stress reduction include jogging, swimming, cycling, and walking. They cause exercise-induced blood circulation and induce activity on the HPA (Hypothalamus-pituitary-adrenal) axis, which causes mood improvement and encourages serotonin secretion. </div>

<div class="paragraph"><h1>2. Exercise Boosts your Self-Esteem</h1></div>

<div class="paragraph">The body uses <a href="https://www.healthline.com/health/dopamine-vs-serotonin#other-psychological-conditions">dopamine</a> to reward positive behavior. For example, your body will release dopamine if you achieve a goal or receive praise from your boss. </div>

<div class="paragraph">Another important hormone is serotonin. It's the body's <a href="https://www.healthline.com/health/mental-health/serotonin#functions">"feel-good" hormone</a>. Unfortunately, many people turn to substance use and abuse in their quest for these chemicals, whereas exercise is a stable source. </div>

<div class="paragraph">Making and sticking to an exercise routine will make you feel accomplished and certified (that's dopamine talking). </div>

<div class="paragraph">The more you succeed, the more you'll believe in your capacity, increasing your self-confidence and drive. This technique is one strategy for combating mild to moderate depression.</div>

<div class="paragraph"><h1>3. Exercise helps you Sleep Better</h1></div>

<div class="paragraph">You must know <a href="https://www.sleepfoundation.org/how-sleep-works/why-do-we-need-sleep">how important sleep is</a>; if your doctor hasn't told you, the internet and social media have. But if you're stressed, anxious, depressed, or experiencing any form of mental disturbance, sleep will be difficult to come by. </div>

<div class="paragraph">Short bouts of exercise such as stretches, walking, or a light jog can relieve tension, relax your muscles, help you fall into soothing sleep, and leave you energized when you wake up. </div>

<div class="paragraph"><h1>4. Exercise and Cognitive Function</h1></div>

<div class="paragraph">Research shows that the same endorphins that keep you relaxed also help you concentrate, focus, and retain details better, improving your memory, and fighting against age-related decline in memory capacity. </div>

<div class="paragraph">Directly, exercise promotes the synthesis of growth factors, which are hormone-like substances that influence the development of new blood vessels in the brain as well as the quantity, survival, and general wellbeing of new brain cells.</div>

<div class="paragraph"><h1>5. ADHD, PTSD, and Exercise </h1></div>

<div class="paragraph">Exercise releases neurotransmitters like dopamine and norepinephrine that help improve your focus and attention. This benefit makes it the most effective non-drug treatment for ADHD (attention-deficit/hyperactivity disorder).</div>

<div class="paragraph">According to <a href="https://www.researchgate.net/publication/317948636_Direct_and_indirect_effects_of_exercise_on_posttraumatic_stress_disorder_symptoms_A_longitudinal_study">studies from General Hospital Psychiatry</a>, exercise also has a direct and indirect effect on patients with PTSD. </div>

<div class="paragraph">Exercises that include your arms and feet and are challenging enough to keep you focused can help you recover from traumatic shock directly and indirectly by diverting your attention from unhealthy coping mechanisms like substance abuse.</div>

<div class="paragraph">These conditions can affect your social relationships, lowering your self-esteem and probably leading to depression.  </div>

<div class="paragraph">Exercise can also boost your mental health by:</div>
<div class="paragraph">
<ul>
<li>Increasing your libido and interest in socialization </li>

<li>Making you more resilient both emotionally and physically, and</li>

<li>Making you physically and emotionally stronger </li>
</ul>
</div>

<div class="paragraph"><ul>Bottom Line</ul></div>

<div class="paragraph">Just like with other forms of health, prevention and maintenance are always cheaper than trying to fix it after it breaks. </div>

<div class="paragraph">It is more expedient to change an aspect of your lifestyle to gain mental balance than to rely on drugs and medication. This is not to say that drugs aren't essential, but where they can be avoided, they should be avoided. </div>

<div class="paragraph">You can add brief walks and stretches into your regular activities and start reaping these advantages without even engaging in strenuous workouts. </div>
    `
  },
  {
    "id": "7",
      "title": "Five Ways to Stay Fit and Healthy When you Work a Desk Job",
      "header_image": "https://images.unsplash.com/photo-1615076754255-351148b9d194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "header_image_cred": "Nubelson Fernandes",
      "slug": "five-ways-to-stay-fit-and-healthy-when-you-work-a-desk-job",
      "uploaded_by": "02/21/2023",
      "body": `
  <div class="paragraph">According to Nilofer Merchant, <a href="https://hbr.org/2013/01/sitting-is-the-smoking-of-our-generation">sitting is the smoking of our generation</a>. While this statement might seem dramatic, it's the truth. We spend roughly 40 hours weekly sitting at a desk, staring into computer screens. </div>

  <div class="paragraph">After an hour of sitting, the production of fat-burning enzymes in the body decline by 80-90%, and the metabolism slows down. When this happens, blood starts pooling in your legs, and pressure builds up in the spine. </div>

  <div class="paragraph">Studies show that <a href="https://mashable.com/archive/too-much-sitting">sitting for extended hours</a> every day reduces your life expectancy. It's even worse when you adopt a poor posture. The side effects are far-reaching, from chronic neck and back pains to obesity and <a href="https://www.webmd.com/pain-management/carpal-tunnel/carpal-tunnel-syndrome">carpal tunnel syndrome</a>.  </div>

  <div class="paragraph">Fortunately, we have several ways to counteract the side effects of working a desk job, from ergonomic furniture to desk exercises. </div>

  <div class="paragraph">Here are the five best ways to stay fit if you live a sedentary life. </div>

  <div class="paragraph"><h1>1. Walk More</h1></div>

  <div class="article-image-container"><img src="https://images.unsplash.com/photo-1613931372190-b067a12f73b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="article image" class="article-image" /></div>

  <div class='credit center'><p>Photo by: <a href="https://unsplash.com/photos/pxEroa7lYx8?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditShareLink">Johannes Plenio</a></div>


  <div class="paragraph">Your desk job requires you to sit for long hours, either working on your computer or attending meetings. With looming deadlines and busy daily schedules, it's easy to spend your work hours sitting at your desk, taking only lunch and pee breaks.</div>

  <div class="paragraph">Hippocrates knew what he was saying when he stated that <a href="https://www.psychologytoday.com/us/blog/the-athletes-way/201506/hippocrates-was-right-walking-is-the-best-medicine">walking was the best medicine</a>. </div>

  <div class="paragraph">According to experts, <a href="https://www.healthline.com/health-news/walking-an-extra-1000-steps-may-increase-your-life-span#How-walking-improves-our-health">walking at least 30 minutes</a> every day could save your life and increase your lifespan. </div>


  <div class="paragraph">So, here's what you can do:</div>

  <div class="paragraph">
  <ul>
  <li>Park far away and walk the extra mile to your office</li>

  <li>Ditch the elevator and take the stairs</li>

  <li>Alternate between sitting at your desk and standing after every 30 minutes or so</li>

  <li>Take light strolls every evening after work</li>

  <li>Avoid using a cab for short distances. </li>
  </ul>
  </div>

  <div class="paragraph"><h1>2. Stretch Every Few Hours</h1></div>

  <div class="article-image-container"><img src="https://images.unsplash.com/photo-1554977929-0ed5ce8f1509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="article image" class="article-image" /></div>

  <div class='credit center'>Photo by: <a href="https://unsplash.com/photos/nhjxngI_5D4?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditShareLink">Rishikesh Yogpeeth</a></div>


  <div class="paragraph">Sitting for long hours tends to affect your back and general posture.  So, it's easy to slump or feel fatigued after a while. </div>

  <div class="paragraph">You can reduce this feeling by taking quick breaks to stretch or move every 30 minutes. For example, try touching your toes or performing quick jumping jacks and sit-ups to get your blood pumping. </div>

  <div class="paragraph">Do what you can to stay fit and active when you start slouching after several hours. </div>

  <div class="paragraph"><h1>3. Ditch the Unhealthy Snacks</h1></div>

  <div class="paragraph">Your urge to snack during the day increases when you skip breakfast. It's because the body needs proper nutrition and water to function correctly. And when you don't get it, you look for that shot of energy from carbs and junk foods. </div>

  <div class="paragraph">Avoid snacks and sugary drinks and opt for healthier options like salads, fruits, and vegetables. </div>

  <div class="paragraph">Drink water more. It keeps you hydrated and also encourages increased bathroom breaks. </div>

  <div class="paragraph">More bathroom breaks equal more walking and exercising. So you can kill two birds with one healthy stone. </div>

  <div class="paragraph"><h1>4. Use an Ergonomic Chair</h1></div>

  <div class="paragraph">Nothing reduces your health and productivity more than an uncomfortable chair. Back pains and neck strains would be the least of your worries if you keep using a lousy office chair. </div>

  <div class="paragraph">Getting an ergonomic chair with proper spinal support and an adjustable headrest and backrest could save your life today. In addition, it would help you avoid back injuries or neck arthritis (<a href="https://www.mayoclinic.org/diseases-conditions/cervical-spondylosis/symptoms-causes/syc-20370787#:~:text=Cervical%20spondylosis%20is%20a%20general,common%20and%20worsens%20with%20age.">cervical spondylosis</a>) later in life. </div>

  <div class="paragraph"><h1>5. Perform Mini Desk Exercises</h1></div>


  <div class="article-image-container"><img src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="article image" class="article-image" /></div>

  <div class='credit center'>Photo by: <a href="https://unsplash.com/photos/Vz0RbclzG_w?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditShareLink">Anupam Mahapatra</a></div>

  <div>You can perform mini exercises if you can't move away from your desk every few hours. Here are some desk exercises you can do: </div>

  <div class="paragraph"><h1>Leg Raises (Extensions)</h1></div>

  <div class="paragraph">
  <ul>
  <li>While seated, point your toes and extend your leg out</li>

  <li>Lift your leg and hold the position for 5-10 seconds to stretch your hamstrings and calves</li>

  <li>Switch to the second leg and repeat the exercise. </li>
  </ul>
  </div>

  <div class="paragraph"><h1>Arm Circles</h1></div>

  <div class="paragraph">
  <ul>
  <li>Plant your feet firmly on the floor and straighten your back</li>

  <li>Hold your arms straight to the side</li>

  <li>Move your arms slowly in small circles for 5-10 seconds</li>

  <p>Alternate movement in both clockwise and anti-clockwise positions. </div>

  </ul>
  </div>

  <div class="paragraph"><h1>Squats</h1></div>

  <div class="paragraph">
  <ul>
  <li>Do 10-20 squats every hour or 50 during your lunch break to increase your heart rate and work the glutes and leg muscles. </li>

  <li>Lower Back Stretch</li>

  <li>Seat upright with your feet planted firmly on the ground</li>

  <li>Widen your knees and lower your head </li>

  <li>Let your head drop in between your legs (you can pretend you're tying your shoelaces)</li>

  <li>Flex your hands and touch your toes</li>

  <li>Hold the position for 10-30 seconds</li>
  </ul>
  </div>

  <div class="paragraph">The whole point of these desk exercises is to keep your body in constant motion and increase your heart rate. With proper planning and motivation, you can always find creative ways to stay fit and healthy. </div>

  </div>
      `
  }
]

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogs: any = articles;
  page: number = 1;

  constructor(private router: Router){

  }

  right = faArrowRight;

  ngOnInit(){
  }

  changePage(event: any){

  }

  parseBody(body: any){
    return JSON.parse(body);
  }

  truncateTitle(title: string){
    if(title.length > 40){
      return title.substring(0, 40) + "..."
    } else {
      return title;
    }
  }

  goToArticleLink(uploadDate: string, slug: string){
    const date = uploadDate.split("/");
    const link = `/article/${date[2]}/${date[1]}/${date[0]}/${slug}`
    this.router.navigate([link])
    return;
  }

}


