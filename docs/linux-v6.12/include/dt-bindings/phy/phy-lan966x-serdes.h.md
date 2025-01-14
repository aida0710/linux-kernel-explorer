---
sidebar_position: 4
---
# phy-lan966x-serdes.h

### ファイル情報

- パス: `linux-v6.12/include/dt-bindings/phy/phy-lan966x-serdes.h`

### コンテンツ

```h
/* SPDX-License-Identifier: (GPL-2.0 OR MIT) */

#ifndef __PHY_LAN966X_SERDES_H__
#define __PHY_LAN966X_SERDES_H__

#define CU(x)		(x)
#define CU_MAX		CU(2)
#define SERDES6G(x)	(CU_MAX + 1 + (x))
#define SERDES6G_MAX	SERDES6G(3)
#define RGMII(x)	(SERDES6G_MAX + 1 + (x))
#define RGMII_MAX	RGMII(2)
#define SERDES_MAX	(RGMII_MAX + 1)

#endif

```
