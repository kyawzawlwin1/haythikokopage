import React from "react";
import haythikoko from "../assets/haythikoko.jpg";
const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12 bg-[#FFFBF1]">
      <form action="">
        <input type="text" className="bg-gray-900" />
        <input type="text" className="bg-gray-900" />
        <button className="bg-gray-900 rounded-lg p-3 m-3">Contact</button>
      </form>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          numquam repellat aperiam eum incidunt nemo ab odit culpa totam facilis
          perspiciatis soluta quod fuga modi alias est, commodi doloribus saepe!
        </p>
      </div>
      <div>
        {/* <p className="text-gray-900">
          With a passion for sustainable design, I believe that every structure
          should tell a story. My approach focuses on harmonizing the
          environment with contemporary architectural elements
        </p> */}

        {/* Professional Bio: သူမရဲ့ ပညာအရည်အချင်းနဲ့ အလုပ်အတွေ့အကြုံ အကျဉ်းချုပ်။
        Vision/Philosophy: သူမရဲ့ ဒီဇိုင်းစတိုင်က ဘယ်လိုမျိုးလဲ? (ဥပမာ-
        Minimalist လား၊ ဒါမှမဟုတ် Sustainable ဖြစ်တာကို အားပေးတာလား?)
        Achievements: ရရှိဖူးတဲ့ ဆုတံဆိပ်တွေ ဒါမှမဟုတ် ထင်ရှားတဲ့ project
        ကြီးတွေအကြောင်း ဒီမှာထည့် */}
        <img
          src={haythikoko}
          alt=""
          className="  mb-12  rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutPage;
