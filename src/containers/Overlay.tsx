import * as React from 'react';
import { connect } from 'react-redux';
import * as classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

interface IStateProps {
  bets: any[];
  time: number,
}

export default connect(
  (state: any): IStateProps => ({
    bets: state.bets,
    time: state.time,
  })
)(({ bets, time }: IStateProps) => (
  <ul className="bets">
    {bets.map(bet => (
      <CSSTransition in={bet.startTime <= time && !bet.finished} classNames="visible">
        <li className="bet">
          <CSSTransition in={bet.resolved} classNames="bet">
            {state => (
              <div className={classNames('bet-resolution', `bet-resolution-${bet.result ? 'win' : 'lose'}`)}>
                <div className="bet-who">
                  <img src={bet.avatar} className="bet-who-avatar" />
                </div>
                <div className="bet-outcome">
                  <strong>{bet.result ? 'You Win' : 'You Lose'}</strong>
                  <p>{bet.result ? 'Nice call!' : 'Better luck next time!'}</p>
                </div>
                {bet.result && (
                  <div className="bet-payout">
                  <span className="stake-label">Payout</span>
                  <span className="stake-amount">+&pound;{bet.payout}</span>
                  </div>
                )}
              </div>
            )}
          </CSSTransition>
          <div className="bet-who">
            <img src={bet.avatar} className="bet-who-avatar" />
          </div>
          <CSSTransition in={!bet.resolved} classNames="hide">
            <React.Fragment>
              <div className="bet-outcome">
                <strong className="bet-outcome-name">{bet.name}</strong>
                <span className="bet-outcome-market">{bet.market}</span>
                <span className="bet-outcome-prediction">{bet.prediction}</span>
              </div>
              <div className="bet-payout">
                <span className="stake-label">Stake</span>
                <span className="stake-amount">&pound;{bet.stake}</span>
              </div>
            </React.Fragment>
          </CSSTransition>
        </li>
      </CSSTransition>
    ))}
  </ul>
));