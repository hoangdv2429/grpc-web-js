import * as _230 from "./applications/transfer/v1/genesis";
import * as _231 from "./applications/transfer/v1/query";
import * as _232 from "./applications/transfer/v1/transfer";
import * as _233 from "./applications/transfer/v1/tx";
import * as _234 from "./applications/transfer/v2/packet";
import * as _235 from "./core/channel/v1/channel";
import * as _236 from "./core/channel/v1/genesis";
import * as _237 from "./core/channel/v1/query";
import * as _238 from "./core/channel/v1/tx";
import * as _239 from "./core/client/v1/client";
import * as _240 from "./core/client/v1/genesis";
import * as _241 from "./core/client/v1/query";
import * as _242 from "./core/client/v1/tx";
import * as _243 from "./core/commitment/v1/commitment";
import * as _244 from "./core/connection/v1/connection";
import * as _245 from "./core/connection/v1/genesis";
import * as _246 from "./core/connection/v1/query";
import * as _247 from "./core/connection/v1/tx";
import * as _248 from "./core/port/v1/query";
import * as _249 from "./core/types/v1/genesis";
import * as _250 from "./lightclients/localhost/v1/localhost";
import * as _251 from "./lightclients/solomachine/v1/solomachine";
import * as _252 from "./lightclients/solomachine/v2/solomachine";
import * as _253 from "./lightclients/tendermint/v1/tendermint";
import * as _474 from "./applications/transfer/v1/tx.amino";
import * as _475 from "./core/channel/v1/tx.amino";
import * as _476 from "./core/client/v1/tx.amino";
import * as _477 from "./core/connection/v1/tx.amino";
import * as _478 from "./applications/transfer/v1/tx.registry";
import * as _479 from "./core/channel/v1/tx.registry";
import * as _480 from "./core/client/v1/tx.registry";
import * as _481 from "./core/connection/v1/tx.registry";
import * as _482 from "./applications/transfer/v1/query.lcd";
import * as _483 from "./core/channel/v1/query.lcd";
import * as _484 from "./core/client/v1/query.lcd";
import * as _485 from "./core/connection/v1/query.lcd";
import * as _486 from "./applications/transfer/v1/query.rpc.Query";
import * as _487 from "./core/channel/v1/query.rpc.Query";
import * as _488 from "./core/client/v1/query.rpc.Query";
import * as _489 from "./core/connection/v1/query.rpc.Query";
import * as _490 from "./core/port/v1/query.rpc.Query";
import * as _491 from "./applications/transfer/v1/tx.rpc.msg";
import * as _492 from "./core/channel/v1/tx.rpc.msg";
import * as _493 from "./core/client/v1/tx.rpc.msg";
import * as _494 from "./core/connection/v1/tx.rpc.msg";
import * as _566 from "./lcd";
import * as _567 from "./rpc.query";
import * as _568 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._230,
        ..._231,
        ..._232,
        ..._233,
        ..._474,
        ..._478,
        ..._482,
        ..._486,
        ..._491
      };
      export const v2 = { ..._234
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._235,
        ..._236,
        ..._237,
        ..._238,
        ..._475,
        ..._479,
        ..._483,
        ..._487,
        ..._492
      };
    }
    export namespace client {
      export const v1 = { ..._239,
        ..._240,
        ..._241,
        ..._242,
        ..._476,
        ..._480,
        ..._484,
        ..._488,
        ..._493
      };
    }
    export namespace commitment {
      export const v1 = { ..._243
      };
    }
    export namespace connection {
      export const v1 = { ..._244,
        ..._245,
        ..._246,
        ..._247,
        ..._477,
        ..._481,
        ..._485,
        ..._489,
        ..._494
      };
    }
    export namespace port {
      export const v1 = { ..._248,
        ..._490
      };
    }
    export namespace types {
      export const v1 = { ..._249
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._250
      };
    }
    export namespace solomachine {
      export const v1 = { ..._251
      };
      export const v2 = { ..._252
      };
    }
    export namespace tendermint {
      export const v1 = { ..._253
      };
    }
  }
  export const ClientFactory = { ..._566,
    ..._567,
    ..._568
  };
}