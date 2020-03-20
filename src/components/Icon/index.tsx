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
import './index.css'

export enum IconNames {
  ANT_MAN = 'ANT_MAN',
  BLACK_PANTHER ='BLACK_PANTHER',
  BLACK_WIDOW = 'BLACK_WIDOW',
  CAPTAIN_AMERICA = 'CAPTAIN_AMERICA',
  DEAD_POOL = 'DEAD_POOL',
  DR_DOOM = 'DR_DOOM',
  DR_STRANGE = 'DR_STRANGE',
  DRAX = 'DRAX',
  FALCON = 'FALCON',
  GAMORA = 'GAMORA',
  GROOT = 'GROOT',
  HAWKEYE = 'HAWKEYE',
  HULK = 'HULK',
  IRON_MAN = 'IRON_MAN',
  LOKI = 'LOKI',
  MANTIS = 'MANTIS',
  NEBULA = 'NEBULA',
  NICK_FURY = 'NICK_FURY',
  RED_SKULL = 'RED_SKULL',
  ROCKET = 'ROCKET',
  SPIDER_MAN = 'SPIDER_MAN',
  STAR_LORD = 'STAR_LORD',
  THANOS = 'THANOS',
  THE_THING = 'THE_THING',
  THOR = 'THOR',
  VISION = 'VISION',
  WASP = 'WASP',
  WINTER_SOLDIER = 'WINTER_SOLDIER',
  YONDU = 'YONDU'
}

export interface IconProps {
  name: IconNames;
}

const Icon: React.FC<IconProps> = ({name}) => {
  switch(name) {
    case IconNames.ANT_MAN:
      return <AntmanAvatar className={'avatar-icon'} id={'antMan'} width={75} height={75} />;
    case IconNames.BLACK_PANTHER:
      return <BlackPantherAvatar className={'avatar-icon'} id={'blackPanther'} width={75} height={75} />;
    case  IconNames.BLACK_WIDOW:
      return <BlackWidowAvatar className={'avatar-icon'} id={'blackWidow'} width={75} height={75} />;
    case IconNames.CAPTAIN_AMERICA:
      return <CaptainAmericaAvatar className={'avatar-icon'} id={'captainAmerica'} width={75} height={75} />;
    case IconNames.DEAD_POOL:
      return <DeadPoolAvatar className={'avatar-icon'} id={'deadPool'} width={75} height={75} />;
    case IconNames.DRAX:
      return <DraxAvatar className={'avatar-icon'} id={'drax'} width={75} height={75} />;
    case IconNames.DR_DOOM:
      return <DrDoomAvatar className={'avatar-icon'} id={'drDoom'}  width={75} height={75} />;
    case IconNames.DR_STRANGE:
      return <DrStrangeAvatar className={'avatar-icon'} id={'drStrange'}  width={75} height={75} />;
    case IconNames.FALCON:
      return <FalconAvatar className={'avatar-icon'} id={'falcon'}  width={75} height={75} />;
    case IconNames.GAMORA:
      return <GamoraAvatar className={'avatar-icon'} id={'gamora'}  width={75} height={75} />;
    case IconNames.GROOT:
      return <GrootAvatar className={'avatar-icon'} id={'groot'} width={75} height={75} />;
    case IconNames.HAWKEYE:
      return <HawkEyeAvatar className={'avatar-icon'} id={'hawkeye'}  width={75} height={75} />;
    case IconNames.HULK:
      return <HulkAvatar className={'avatar-icon'} id={'hulk'} width={75} height={75} />;
    case IconNames.IRON_MAN:
      return <IronManAvatar className={'avatar-icon'} id={'ironMan'} width={75} height={75} />;
    case IconNames.LOKI:
      return <LokiAvatar className={'avatar-icon'} id={'loki'} width={75} height={75} />;
    case IconNames.MANTIS:
      return <MantisAvatar className={'avatar-icon'} id={'mantix'} width={75} height={75} />;
    case IconNames.NEBULA:
      return <NebulaAvatar className={'avatar-icon'} id={'nebula'} width={75} height={75} />;
    case IconNames.NICK_FURY:
      return <NickFuryAvatar className={'avatar-icon'} id={'nickFury'} width={75} height={75} />;
    case IconNames.RED_SKULL:
      return <RedSkullAvatar className={'avatar-icon'} id={'redSkull'} width={75} height={75} />;
    case IconNames.ROCKET:
      return <RocketAvatar className={'avatar-icon'} id={'rocket'} width={75} height={75} />;
    case IconNames.SPIDER_MAN:
      return <SpiderManAvatar className={'avatar-icon'} id={'spiderMan'} width={75} height={75} />;
    case IconNames.STAR_LORD:
      return <StarLordAvatar className={'avatar-icon'} id={'starLord'} width={75} height={75} />;
    case IconNames.THANOS:
      return <ThanosAvatar className={'avatar-icon'} id={'thanos'} width={75} height={75} />;
    case IconNames.THE_THING:
      return <ThingAvatar className={'avatar-icon'} id={'theThing'} width={75} height={75} />;
    case IconNames.THOR:
      return <ThorAvatar className={'avatar-icon'} id={'thor'} width={75} height={75} />;
    case IconNames.VISION:
      return <VisionAvatar className={'avatar-icon'} id={'vision'} width={75} height={75} />;
    case IconNames.WASP:
      return <WaspAvatar className={'avatar-icon'} id={'wasp'} width={75} height={75} />;
    case IconNames.WINTER_SOLDIER:
      return <WinterSoldierAvatar className={'avatar-icon'} id={'winterSoldier'} width={75} height={75} />;
    case IconNames.YONDU:
      return <YonduAvatar className={'avatar-icon'} id={'yondu'} width={75} height={75} />;
    default:
      return null;
  }
};

export { Icon };










