import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  id: "xiaoshuo",
  title: "小说改编剧本",
  desc: "通过最新AI技术分析小说风格并生成剧本初稿,再由专业编剧精心修订,轻松将小说改编为STANDARD剧本。",
  image: benefitOneImg,
  bullets: [
    {
      title: "根据小说类型自动匹配不同的剧本风格",
      desc: "比如悬疑小说匹配悬疑剧本；言情小说匹配言情风格；",
      icon: <FaceSmileIcon />,
    },
    {
      title: "AGI 技术自动生成剧本初稿",
      desc: "通过自研 AI 系统分析小说风格、情节，根据故事主题、人物小传等生成剧本初稿",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "专业编剧基于初稿进行精修",
      desc: "编剧1对1进行编辑、修改，达到制作标准",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  id: "dingzhi",
  title: "剧本定制服务",
  desc: "由资深编剧根据你的需求,为你定制个性化的剧本,修改风格、情节、结构,让每个剧本都与众不同。",
  image: benefitTwoImg,
  bullets: [
    {
      title: "需求定制",
      desc: "根据制作团队设定的主题和风格来编写原创剧本",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "对已改编好的剧本进行进一步定制和加工",
      desc: "比如修改风格、删改情节、调整结构、增添细节等",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "专业编剧提供一对一服务",
      desc: "由专业编剧提供一对一服务, 根据用户需求定制专属剧本 ",
      icon: <SunIcon />,
    },
  ],
};

const benefitThree = {
  id: "banquan",
  title: "剧本版权代理",
  desc: "提供剧本版权代理、IP开发、影视出版一条龙服务,让你的剧本辉煌上演。",
  image: benefitOneImg,
  bullets: [
    {
      title: "连接剧本和影视/出版商",
      desc: "为改编完成和定制后的剧本, 提供发行代理服务。",
      icon: <FaceSmileIcon />,
    },
    {
      title: "协助用户出售剧本版权",
      desc: "与多家影视行业或制作团队沟通出售版权业务。",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "对已完成剧本进行 IP 开发",
      desc: "撰写企划案, 通过自己的渠道进行投资拍摄或出版",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export {benefitOne, benefitTwo,benefitThree};
