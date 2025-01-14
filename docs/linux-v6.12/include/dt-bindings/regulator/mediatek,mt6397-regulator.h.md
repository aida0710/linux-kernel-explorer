---
sidebar_position: 8
---
# mediatek,mt6397-regulator.h

### ファイル情報

- パス: `linux-v6.12/include/dt-bindings/regulator/mediatek,mt6397-regulator.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef _DT_BINDINGS_REGULATOR_MEDIATEK_MT6397_H_
#define _DT_BINDINGS_REGULATOR_MEDIATEK_MT6397_H_

/*
 * Buck mode constants which may be used in devicetree properties (eg.
 * regulator-initial-mode, regulator-allowed-modes).
 * See the manufacturer's datasheet for more information on these modes.
 */

#define MT6397_BUCK_MODE_AUTO		0
#define MT6397_BUCK_MODE_FORCE_PWM	1

#endif

```
