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
import {css, jsx} from "@emotion/core";
/** @jsx jsx */

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
      return <AntmanAvatar css={css`pointer-events: none;`} id={'antMan'} width={75} height={75} />;
    case IconNames.BLACK_PANTHER:
      return <BlackPantherAvatar css={css`pointer-events: none;`} id={'blackPanther'} width={75} height={75} />;
    case  IconNames.BLACK_WIDOW:
      return <BlackWidowAvatar css={css`pointer-events: none;`} id={'blackWidow'} width={75} height={75} />;
    case IconNames.CAPTAIN_AMERICA:
      return <CaptainAmericaAvatar css={css`pointer-events: none;`} id={'captainAmerica'} width={75} height={75} />;
    case IconNames.DEAD_POOL:
      return <DeadPoolAvatar css={css`pointer-events: none;`} id={'deadPool'} width={75} height={75} />;
    case IconNames.DRAX:
      return <DraxAvatar css={css`pointer-events: none;`} id={'drax'} width={75} height={75} />;
    case IconNames.DR_DOOM:
      return <DrDoomAvatar css={css`pointer-events: none;`} id={'drDoom'}  width={75} height={75} />;
    case IconNames.DR_STRANGE:
      return <DrStrangeAvatar css={css`pointer-events: none;`} id={'drStrange'}  width={75} height={75} />;
    case IconNames.FALCON:
      return <FalconAvatar css={css`pointer-events: none;`} id={'falcon'}  width={75} height={75} />;
    case IconNames.GAMORA:
      return <GamoraAvatar css={css`pointer-events: none;`} id={'gamora'}  width={75} height={75} />;
    case IconNames.GROOT:
      return <GrootAvatar css={css`pointer-events: none;`} id={'groot'} width={75} height={75} />;
    case IconNames.HAWKEYE:
      return <HawkEyeAvatar css={css`pointer-events: none;`} id={'hawkeye'}  width={75} height={75} />;
    case IconNames.HULK:
      return <HulkAvatar css={css`pointer-events: none;`} id={'hulk'} width={75} height={75} />;
    case IconNames.IRON_MAN:
      return <IronManAvatar css={css`pointer-events: none;`} id={'ironMan'} width={75} height={75} />;
    case IconNames.LOKI:
      return <LokiAvatar css={css`pointer-events: none;`} id={'loki'} width={75} height={75} />;
    case IconNames.MANTIS:
      return <MantisAvatar css={css`pointer-events: none;`} id={'mantix'} width={75} height={75} />;
    case IconNames.NEBULA:
      return <NebulaAvatar css={css`pointer-events: none;`} id={'nebula'} width={75} height={75} />;
    case IconNames.NICK_FURY:
      return <NickFuryAvatar css={css`pointer-events: none;`} id={'nickFury'} width={75} height={75} />;
    case IconNames.RED_SKULL:
      return <RedSkullAvatar css={css`pointer-events: none;`} id={'redSkull'} width={75} height={75} />;
    case IconNames.ROCKET:
      return <RocketAvatar css={css`pointer-events: none;`} id={'rocket'} width={75} height={75} />;
    case IconNames.SPIDER_MAN:
      return <SpiderManAvatar css={css`pointer-events: none;`} id={'spiderMan'} width={75} height={75} />;
    case IconNames.STAR_LORD:
      return <StarLordAvatar css={css`pointer-events: none;`} id={'starLord'} width={75} height={75} />;
    case IconNames.THANOS:
      return <ThanosAvatar css={css`pointer-events: none;`} id={'thanos'} width={75} height={75} />;
    case IconNames.THE_THING:
      return <ThingAvatar css={css`pointer-events: none;`} id={'theThing'} width={75} height={75} />;
    case IconNames.THOR:
      return <ThorAvatar css={css`pointer-events: none;`} id={'thor'} width={75} height={75} />;
    case IconNames.VISION:
      return <VisionAvatar css={css`pointer-events: none;`} id={'vision'} width={75} height={75} />;
    case IconNames.WASP:
      return <WaspAvatar css={css`pointer-events: none;`} id={'wasp'} width={75} height={75} />;
    case IconNames.WINTER_SOLDIER:
      return <WinterSoldierAvatar css={css`pointer-events: none;`} id={'winterSoldier'} width={75} height={75} />;
    case IconNames.YONDU:
      return <YonduAvatar css={css`pointer-events: none;`} id={'yondu'} width={75} height={75} />;
    default:
      return null;
  }
};

export { Icon };










