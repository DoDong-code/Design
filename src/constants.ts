import project1Img from './assets/projects/project1.png';
import project2Img from './assets/projects/project2.png';
import project3Img from './assets/projects/project3.png';
import project4Img from './assets/projects/project4.png';
import project5Img from './assets/projects/project5.png';

export interface Project {
  id: string;
  titleEn: string;
  titleZh: string;
  category: 'UI Motion' | 'UI' | '3D Motion' | 'Visual' | 'AI';
  image: string;
  year: string;
  descEn: string;
  descZh: string;
  detailImages: string[];
  video?: string;
}

const MOCK_DETAIL_IMAGES_1 = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
];

const MOCK_DETAIL_IMAGES_2 = [
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
];

const MOCK_DETAIL_IMAGES_3 = [
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    titleEn: 'DuoDuo Video - Live Stream Broadcast Gift',
    titleZh: '多多视频-直播礼物',
    category: '3D Motion',
    image: project1Img,
    year: '2024',
    descEn: 'Motion design for the flagship Lunar New Year live broadcast gift. Modeled and animated a high-fidelity 3D festive dragon with custom skeleton bindings. Aligned with broadcast start cues and monetization drivers to optimize key metrics (Paying Users, ARPPU).',
    descZh: '新年活动重磅大促礼物动效设计。以传统生肖“祥龙”为创意载体，打磨高完成度3D建模、骨骼动作与光影渲染。配合开播引导、营收激励与精细化运营指标（付费人数、ARPPU）达成闭环，实现品牌与商业价值双丰收。',
    detailImages: MOCK_DETAIL_IMAGES_1,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-liquid-3444-large.mp4'
  },
  {
    id: '2',
    titleEn: 'UI Motion Design Specifications & Parameter Refining',
    titleZh: 'UI 动效设计规范与参数提炼',
    category: 'UI Motion',
    image: project2Img,
    year: '2024',
    descEn: 'Established modular motion guidelines by extracting reusable animation parameters (popup, toast, exit animations, interactive buttons). Streamlined delivery using Bodymovin, BX-AE2CSS, and Lego formats to optimize load time and render performance.',
    descZh: '提炼出一套高复用性的动态微交互组件规范（如弹窗/toast、退场、活动红包按钮、高亮按钮等）。通过参数提炼配合BX-AE2CSS、Bodymovin等开发组件工具，确保视觉还原与包体性能最优化。',
    detailImages: MOCK_DETAIL_IMAGES_2,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-of-a-swimming-pool-4694-large.mp4'
  },
  {
    id: '3',
    titleEn: 'TEMU - Referral Growth UI Design',
    titleZh: 'TEMU-裂变增长UI',
    category: 'UI',
    image: project3Img,
    year: '2024',
    descEn: 'Engineered growth-focused user experience designs for international viral referral games, optimizing across different regulatory regions. Designed user emotion mapping from entry attraction to micro-successes, driving significant growth in activation and GMV.',
    descZh: '针对多国合规场景，深度研发多版本社交裂变游戏与兑换流程。科学布局用户决策漏斗，贯穿“引流-对比-犹豫-初次成功-循环-终极冲刺”的用户心理曲线，大幅提升分享激活率与订单GMV。',
    detailImages: MOCK_DETAIL_IMAGES_3,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-white-clouds-in-a-blue-sky-2311-large.mp4'
  },
  {
    id: '4',
    titleEn: 'Visual System - H5 & Header Templates',
    titleZh: '视觉类-H5/头图',
    category: 'Visual',
    image: project4Img,
    year: '2024',
    descEn: 'A high-retention 30-second countdown quiz gameplay. Incorporated rich spatial visual feedback, continuous count-downs, and instant reward celebration overlays to trigger psychological commitment, successfully maximizing order conversion rates.',
    descZh: '限时30秒极速免单答题玩法设计。通过倒计时常驻渲染紧张氛围、礼物落下装车等即时反馈强化心智，设计沉默成本锁定流程，大幅降低用户流失，拉升大促主链路转化率。',
    detailImages: MOCK_DETAIL_IMAGES_1,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-the-night-sky-out-of-focus-2314-large.mp4'
  },
  {
    id: '5',
    titleEn: 'AI-Assisted Creative Design Portfolio',
    titleZh: 'AI辅助项目',
    category: 'AI',
    image: project5Img,
    year: '2024',
    descEn: 'Created a flagship Year of the Dragon 3D broadcast gift featuring hand-crafted cartoon models and expressive bone bindings for fins and whiskers. Set inside an imperial gold-and-turquoise palace environment with fluid wave animations, producing a massive visual splash.',
    descZh: '围绕龙年国潮文化，打造重磅级3D直播礼物。运用卡通3D建模与骨骼绑定精细控制鱼鳍与胡须摆动，场景结合红黄青经典配色以及青山绿水古风元素，构建出极具冲击力的视觉效果。',
    detailImages: MOCK_DETAIL_IMAGES_2,
    video: 'https://assets.mixkit.co/videos/preview/mixkit-curvy-lines-of-light-on-a-black-background-3446-large.mp4'
  }
];
