export const navLinks = [
  {
    label: "首页",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "图像修复",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "生成填充",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "对象移除",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "对象重着色",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "背景移除",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "个人中心",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "购买积分",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "免费",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20免费积分",
        isIncluded: true,
      },
      {
        label: "基本服务访问",
        isIncluded: true,
      },
      {
        label: "优先客户支持",
        isIncluded: false,
      },
      {
        label: "优先更新",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "专业",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120积分",
        isIncluded: true,
      },
      {
        label: "全服务访问",
        isIncluded: true,
      },
      {
        label: "优先客户支持",
        isIncluded: true,
      },
      {
        label: "优先更新",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "高级",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000积分",
        isIncluded: true,
      },
      {
        label: "全服务访问",
        isIncluded: true,
      },
      {
        label: "优先客户支持",
        isIncluded: true,
      },
      {
        label: "优先更新",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "图像修复",
    subTitle: "通过AI去除图像中的噪点和瑕疵",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "背景移除",
    subTitle: "通过AI去除图像中的背景",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "生成填充",
    subTitle: "通过AI增强图像的维度",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "对象移除",
    subTitle: "通过AI去除图像中的对象",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "对象重着色",
    subTitle: "通过AI重着色图像中的对象",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;