//  icons
import {
  FiYoutube,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiPhone,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/nha1.jpg';
import Project2 from './assets/img/projects/nha2.jpg';
import Project3 from './assets/img/projects/nha3.jpg';  
import Project4 from './assets/img/projects/shophouse1.jpg';
import Project5 from './assets/img/projects/nha4.png';
import Project6 from './assets/img/projects/nha6.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import model1 from './assets/img/projects/nha1.jpg';
import model2 from './assets/img/projects/nha2.jpg';
import model3 from './assets/img/projects/nha3.jpg';
import model4 from './assets/img/projects/nha4.png';
import model5 from './assets/img/projects/nha6.png';


// navigation
export const navigation = [
  {
    name: 'Trang Chủ',
    href: 'home',
  },
  {
    name: 'Giới Thiệu',
    href: 'about',
  },
  {
    name: 'Dự Án',
    href: 'portfolio',
  },
  {
    name: 'Dịch Vụ',
    href: 'services',
  },
  {
    name: 'Mẫu Nhà',
    href: 'testimonials',
  },
  {
    name: 'Liên Hệ',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiFacebook />,
    href: '',
  },
  // {
  //   icon: <FiPhone />,
  //   href: '',
  // },
  // {
  //   icon: <FiDribbble />,
  //   href: '',
  // },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'Nhà Phố',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'Nhà Phố',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'Nhà Phố',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'Shophouse',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'Nhà Phố',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'Nhà Phố',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Nhà Phố',
  },
  {
    name: 'Biệt Thự',
  },
  {
    name: 'Shophouse',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Thiết Kế',
    description:
      'Cụ thể hóa ý tưởng cho ngôi nhà của bạn thành sản phẩm thực tế, phù hợp với nhu cầu.',
  },
  {
    icon: <FiSettings />,
    name: 'Thi Công',
    description:
      'Mang đến bạn bảng giá xây nhà trọn gói với đa dạng mức giá, từ gói bình dân đến cao cấp, cam kết làm hài lòng kể cả những vị khách khó tính nhất. ',
  },
  {
    icon: <FiPenTool />,
    name: 'Sửa Chữa',
    description:
      'Liên hệ tận nơi, tư vấn tận tình, báo giá tận tâm.',
  },
  {
    icon: <FiTag />,
    name: 'Xây Dựng Phần Thô',
    description:
      'Phú Gia Hân mang đến cho khách hàng những đơn giá xây dựng phần thô hợp lý và chất lượng. Khách hàng sẽ được tư vấn những giải pháp tốt nhất tiết kiệm thời gian và chi phí cho nhà đầu tư.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: model1,
    authorText:
      'Nhà phố đã trở thành một xu hướng thiết kế trong kiến trúc đô thị. Với hình khối hiện đại, tinh tế cùng gam màu sang trọng, mẫu nhà phố đã và đang khiến không gian đô thị thêm phần hiện đại và tràn đầy sức sống.',
    authorName: 'Loại: Nhà Phố',
    authorPosition: 'Mẫu 1',
  },
  {
    authorImg: model2,
    authorText:
      'Nhà phố đã trở thành một xu hướng thiết kế trong kiến trúc đô thị. Với hình khối hiện đại, tinh tế cùng gam màu sang trọng, mẫu nhà phố đã và đang khiến không gian đô thị thêm phần hiện đại và tràn đầy sức sống.',
    authorName: 'Loại: Nhà Phố',
    authorPosition: 'Mẫu 2',
  },
  {
    authorImg: model3,
    authorText:
      'Nhà phố đã trở thành một xu hướng thiết kế trong kiến trúc đô thị. Với hình khối hiện đại, tinh tế cùng gam màu sang trọng, mẫu nhà phố đã và đang khiến không gian đô thị thêm phần hiện đại và tràn đầy sức sống.',
    authorName: 'Loại: Nhà Phố',
    authorPosition: 'Mẫu 3',
  },
  {
    authorImg: model4,
    authorText:
      'Nhà phố đã trở thành một xu hướng thiết kế trong kiến trúc đô thị. Với hình khối hiện đại, tinh tế cùng gam màu sang trọng, mẫu nhà phố đã và đang khiến không gian đô thị thêm phần hiện đại và tràn đầy sức sống.',
    authorName: 'Loại: Nhà Phố',
    authorPosition: 'Mẫu 4',
  },
  {
    authorImg: model5,
    authorText:
      'Nhà phố đã trở thành một xu hướng thiết kế trong kiến trúc đô thị. Với hình khối hiện đại, tinh tế cùng gam màu sang trọng, mẫu nhà phố đã và đang khiến không gian đô thị thêm phần hiện đại và tràn đầy sức sống.',
    authorName: 'Loại: Nhà Phố',
    authorPosition: 'Mẫu 5',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Bạn Có Nhu Cầu Tư Vấn Thiết Kế?',
    subtitle: 'Vui lòng Liên Hệ Với Chúng Tôi Qua Địa Chỉ Email',
    description: 'phugiahancompany@gmail.com',
  },
  {
    icon: <FiPhone />,
    title: 'Số Điện Thoại',
    subtitle: 'MR. Tục',
    description: '0905894336',
  },
  {
    icon: <FiMapPin />,
    title: 'Địa Chỉ',
    subtitle: 'Văn Phòng Làm Việc',
    description: '10 Chương Dương, KP. 8, P. An THới, TP. Phú Quốc, Kiên Giang',
  },

];
