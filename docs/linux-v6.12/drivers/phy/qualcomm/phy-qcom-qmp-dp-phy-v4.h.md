---
sidebar_position: 16
---
# phy-qcom-qmp-dp-phy-v4.h

### ファイル情報

- パス: `linux-v6.12/drivers/phy/qualcomm/phy-qcom-qmp-dp-phy-v4.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (c) 2017, The Linux Foundation. All rights reserved.
 */

#ifndef QCOM_PHY_QMP_DP_PHY_V4_H_
#define QCOM_PHY_QMP_DP_PHY_V4_H_

/* Only for QMP V4 PHY - DP PHY registers */
#define QSERDES_V4_DP_PHY_AUX_INTERRUPT_MASK		0x054
#define QSERDES_V4_DP_PHY_AUX_INTERRUPT_CLEAR		0x058
#define QSERDES_V4_DP_PHY_VCO_DIV			0x070
#define QSERDES_V4_DP_PHY_TX0_TX1_LANE_CTL		0x078
#define QSERDES_V4_DP_PHY_TX2_TX3_LANE_CTL		0x09c
#define QSERDES_V4_DP_PHY_SPARE0			0x0c8
#define QSERDES_V4_DP_PHY_AUX_INTERRUPT_STATUS		0x0d8
#define QSERDES_V4_DP_PHY_STATUS			0x0dc

#endif

```
