import React from 'react';
// eslint-disable-next-line

export function ChartCard(props) {
    return (
      <div className="card text-white bg-dark p-2 w-75">
        <h6 class="card-header">
          {props.title}
        </h6>
        <div className="card-body p-4">
          <canvas id={props.canvasID} style="width:100%;max-width:600px"></canvas>
        </div>
      </div>
    );
}


export function ListGroup(props) {
    return (
      <div className="card text-white bg-dark">
        <h6 class="card-header">
          {props.listgroup}
        </h6>
        <div className="card-body">
          <ul class="list-group list-group-flush bg-dark">
          {props.cards.map((card) => (
            <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
              {card.title}
              <span class="badge bg-light text-dark">{card.content}</span>
            </li>
          ))}
          </ul>
        </div>
      </div>
    );
}

export function Card(props) {
    return (
      <div className="card text-white bg-dark">
        <h6 class="card-header">
          {props.title}
        </h6>
        <div className="card-body">
          <p class="card-text">{props.content}</p>
        </div>
      </div>
    );
}



export function Exhibit(props) {
  if (props.canvases) {
    <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
        {props.canvases.map((canvas) => (
          <div class="col">
            <ChartCard title={canvas.title} canvasID={canvas.canvasID}/>
          </div>
         ))}
      </div>
  }
  if (props.listgroup && props.cards) {
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <div class="col">
            <ListGroup listgroup={props.listgroup} cards={props.cards}/>
          </div>
      </div>
    );
  }
  if (props.extended && props.cards) {
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
        {props.cards.map((card) => (
          <div class="col">
            <Card title={card.title} content={card.content} footer={card.footer}/>
          </div>
         ))}
      </div>
    );
  }
  if (props.cards) {
    return (
      <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
        {props.cards.map((card) => (
          <div class="col">
            <Card title={card.title} content={card.content}/>
          </div>
         ))}
      </div>
    );
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mb-4"></div>
  );
}





