---
sidebar_position: 5
---
# rockchip_grf.h

### ファイル情報

- パス: `linux-v6.12/include/soc/rockchip/rockchip_grf.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/*
 * Rockchip General Register Files definitions
 */

#ifndef __SOC_ROCKCHIP_GRF_H
#define __SOC_ROCKCHIP_GRF_H

/* Rockchip DDRTYPE defines */
enum {
	ROCKCHIP_DDRTYPE_DDR3	= 3,
	ROCKCHIP_DDRTYPE_LPDDR2	= 5,
	ROCKCHIP_DDRTYPE_LPDDR3	= 6,
	ROCKCHIP_DDRTYPE_LPDDR4	= 7,
	ROCKCHIP_DDRTYPE_LPDDR4X = 8,
};

#endif /* __SOC_ROCKCHIP_GRF_H */

```
