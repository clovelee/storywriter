import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-3 xl:grid-cols-3">
          <div className="">
            <div className="flex flex-col items-center justify-between w-full h-full px-14 py-14 rounded-2xl">
              <Avatar
                image={userOneImg}
              />

              <div className="flex-grow text-center mt-8">

              <p className="text-gray-600 italic">
                Asa,上海戏剧学院编剧专业毕业,拥有丰富的影视剧本创作经验，她擅长根据IP或原著小说进行改编,会针对不同类型的作品选择合适的剧本风格。Tom还会在保持原作精髓的前提下,对剧本结构和细节进行优化调整,让剧本更贴近影视呈现方式,以及更好地打动观众。他的剧本兼具专业水准和市场价值。
              </p>

              </div> 
              <div>
                <div className="text-md font-medium mt-8">Asa · 专业编剧</div>
              </div>
            </div>
          </div>
          <div className="">
          <div className="flex flex-col items-center justify-between w-full h-full px-14 py-14 rounded-2xl dark:bg-trueGray-800">
          <Avatar
                image={userTwoImg}
              />

              <div className="flex-grow text-center mt-8">

              <p className="text-gray-600 italic">
              Zoe是一个利用最先进的 AI 技术打造的智能剧本生成机器人，它基于庞大的模型，并经过经典剧本学习和微调，能够撰写专业水准的剧本。此外，该机器人还具备准确分析小说风格和情节的能力，非常适合用于生成剧本的初稿。
              </p>

              </div> 
              <div>
                <div className="text-md font-medium mt-8">Zoe · AI 编剧</div>
              </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-between w-full h-full px-14 py-14 rounded-2xl dark:bg-trueGray-800">
          <Avatar
                image={userThreeImg}
              />

              <div className="flex-grow text-center mt-8">

              <p className="text-gray-600 italic">
              HaiTang是这是一位拥有南开大学法律硕士学位的资深影视行业从业者。他不仅拥有丰富的影视行业资源，还对版权运营和推广渠道非常熟悉。。
              </p>

              </div> 
              <div>
                <div className="text-md font-medium mt-8">HaiTang · 版权专家</div>
              </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-32 h-32">
        <Image
          src={props.image}
          width="200"
          height="200"
          alt="Avatar"
          className="inline-block h-32 w-32 rounded-full" 
        />
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-gray-800 rounded-md ring-gray-100 ring-4 dark:ring-gray-900 dark:bg-gray-900 dark:text-gray-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;