
import { Button, Card } from 'antd/lib';

const { Meta } = Card;

const ProjectCard = ({work}) => {
  const { name, desc, url, snapshot } = work;

  return (
    // <div className="card">
    //   <img src={snapshot} alt="" className="card_img" />
    //   <h2 className="card_title">{name}</h2>
    //   <p className="card_desc">{desc}</p>
    //   <a href={url} target="_blank" rel="noopener noreferrer" className="btn card_btn">
    //     Visit
    //   </a>
    // </div>


  <Card
    hoverable
    style={{ width: 240, height:360 }}
    cover={<img alt="project_img" src={snapshot} />}
  >
    <Meta title={name} description={desc} />
   <div className='card_btn' > <Button  href={url}>Visit</Button></div>
  </Card>



  );
};

export default ProjectCard;
