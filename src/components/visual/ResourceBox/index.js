import React from 'react'
import IconTypeResource from "../../icons/IconTypeResource";
import {PRIMARY_COLOR} from "../../../constants/variables";
import CircularProgressbar from "react-circular-progressbar";
import ButtonLink from "../../buttons/ButtonLink";
import {VIEW_RESOURCE} from "../../../constants/translations";


const ResourceBox = ({resource}) => (
  <article className={`slider-resource__item`}
           style={{
             backgroundImage: `url(${resource.img_full})`}}
  >

    <span className={'slider-item__type'}>
      <IconTypeResource typeResource={resource.type} size={2} color={PRIMARY_COLOR}/>
    </span>

    <header className={`slider-item__header`}>
      <h3 className={'app-title app-title--full-background'}>{resource.name}</h3>
    </header>

    <div className={`slider-item__score`}>
      <div className={`slider-item__date`}>{resource.date_text}</div>

      <div className={`slider-item__score-circle`}>

        <CircularProgressbar
          percentage={resource.score}
          text={`${resource.score}%`}
          strokeWidth={10}
          styles={{
            path: {stroke: `rgba(95, 212, 0, ${resource.score / 100})`},
            text: {fill: 'white', fontSize: '20px'},
          }}
        />

      </div>
    </div>
    <footer>
      <div className={`slider-item__resource`}>
        <div className={'slider-item__button'}>
          <ButtonLink  link={`/resource/${resource.type}/${resource.id}`} text={VIEW_RESOURCE}
                      className={`hero-view_button button-link--inverse`}
          />
        </div>
      </div>
    </footer>
  </article>

);

export default ResourceBox;