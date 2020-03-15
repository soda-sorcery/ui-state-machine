import * as React from 'react';
import { ReactComponent as AntmanAvatar } from '../../svg/antman.svg';
import { ReactComponent as BlackPantherAvatar } from '../../svg/black-panther.svg';
import { ReactComponent as BlackWidowAvatar } from '../../svg/black-widow.svg';
import { ReactComponent as CaptainAmericaAvatar } from '../../svg/captain-america.svg';
import { ReactComponent as DeadPoolAvatar } from '../../svg/deadpool.svg';
import { ReactComponent as DrDoomAvatar } from '../../svg/dr-doom.svg';
import { ReactComponent as DrStrangeAvatar } from '../../svg/dr-strange.svg';
import { ReactComponent as DraxAvatar } from '../../svg/drax.svg';
import { ReactComponent as FalconAvatar } from '../../svg/falcon.svg';
import { ReactComponent as GamoraAvatar } from '../../svg/gamora.svg';
import { ReactComponent as GrootAvatar } from '../../svg/groot.svg';
import { ReactComponent as HawkEyeAvatar } from '../../svg/hawkeye.svg';
import { ReactComponent as HulkAvatar } from '../../svg/hulk.svg';
import { ReactComponent as IronManAvatar } from '../../svg/iron-man.svg';
import { ReactComponent as LokiAvatar } from '../../svg/loki.svg';
import { ReactComponent as MantisAvatar } from '../../svg/mantis.svg';
import { ReactComponent as NebulaAvatar } from '../../svg/nebula.svg';
import { ReactComponent as NickFuryAvatar } from '../../svg/nick-fury.svg';
import { ReactComponent as RedSkullAvatar } from '../../svg/red-skull.svg';
import { ReactComponent as RocketAvatar } from '../../svg/rocket.svg';
import { ReactComponent as SpiderManAvatar } from '../../svg/spider-man.svg';
import { ReactComponent as StarLordAvatar } from '../../svg/star-lord.svg';
import { ReactComponent as ThanosAvatar } from '../../svg/thanos.svg';
import { ReactComponent as ThingAvatar } from '../../svg/thing.svg';
import { ReactComponent as ThorAvatar } from '../../svg/thor.svg';
import { ReactComponent as VisionAvatar } from '../../svg/vision.svg';
import { ReactComponent as WaspAvatar } from '../../svg/wasp.svg';
import { ReactComponent as WinterSoldierAvatar } from '../../svg/winter-soldier.svg';
import { ReactComponent as YonduAvatar } from '../../svg/yondu.svg';


export type IconNames = 'antMan' |
  'blackPanther' |
  'blackWidow' |
  'captainAmerica' |
  'deadPool' |
  'drDoom' |
  'drStrange' |
  'drax' |
  'falcon' |
  'gamora' |
  'groot' |
  'hawkeye' |
  'hulk' |
  'ironMan' |
  'loki' |
  'mantis' |
  'nebula' |
  'nickFury' |
  'redSkull' |
  'rocket' |
  'spiderMan' |
  'starLord' |
  'thanos' |
  'theThing' |
  'thor' |
  'vision' |
  'wasp' |
  'winterSoldier' |
  'yondu';

export interface IconProps {
  name: IconNames;
}

const Icon: React.FC<IconProps> = ({name}) => {
  switch(name) {
    case 'antMan':
      return <AntmanAvatar id={'antMan'} width={75} height={75} />;
    case 'blackPanther':
      return <BlackPantherAvatar id={'blackPanther'} width={75} height={75} />;
    case  'blackWidow':
      return <BlackWidowAvatar id={'blackWidow'} width={75} height={75} />;
    case 'captainAmerica':
      return <CaptainAmericaAvatar id={'captainAmerica'} width={75} height={75} />;
    case 'deadPool':
      return <DeadPoolAvatar id={'deadPool'} width={75} height={75} />;
    case 'drax':
      return <DraxAvatar id={'drax'} width={75} height={75} />;
    case 'drDoom':
      return <DrDoomAvatar id={'drDoom'}  width={75} height={75} />;
    case 'drStrange':
      return <DrStrangeAvatar id={'drStrange'}  width={75} height={75} />;
    case 'falcon':
      return <FalconAvatar id={'falcon'}  width={75} height={75} />;
    case 'gamora':
      return <GamoraAvatar id={'gamora'}  width={75} height={75} />;
    case 'groot':
      return <GrootAvatar id={'groot'} width={75} height={75} />;
    case 'hawkeye':
      return <HawkEyeAvatar id={'hawkeye'}  width={75} height={75} />;
    case 'hulk':
      return <HulkAvatar id={'hulk'} width={75} height={75} />;
    case 'ironMan':
      return <IronManAvatar id={'ironMan'} width={75} height={75} />;
    case 'loki':
      return <LokiAvatar id={'loki'} width={75} height={75} />;
    case 'mantis':
      return <MantisAvatar id={'mantix'} width={75} height={75} />;
    case 'nebula':
      return <NebulaAvatar id={'nebula'} width={75} height={75} />;
    case 'nickFury':
      return <NickFuryAvatar id={'nickFury'} width={75} height={75} />;
    case 'redSkull':
      return <RedSkullAvatar id={'redSkull'} width={75} height={75} />;
    case 'rocket':
      return <RocketAvatar id={'rocket'} width={75} height={75} />;
    case 'spiderMan':
      return <SpiderManAvatar id={'spiderMan'} width={75} height={75} />;
    case 'starLord':
      return <StarLordAvatar id={'starLord'} width={75} height={75} />;
    case 'thanos':
      return <ThanosAvatar id={'thanos'} width={75} height={75} />;
    case 'theThing':
      return <ThingAvatar id={'theThing'} width={75} height={75} />;
    case 'thor':
      return <ThorAvatar id={'thor'} width={75} height={75} />;
    case 'vision':
      return <VisionAvatar id={'vision'} width={75} height={75} />;
    case 'wasp':
      return <WaspAvatar id={'wasp'} width={75} height={75} />;
    case 'winterSoldier':
      return <WinterSoldierAvatar id={'winterSoldier'} width={75} height={75} />;
    case 'yondu':
      return <YonduAvatar id={'yondu'} width={75} height={75} />;
    default:
      return null;
  }
};

export { Icon };










