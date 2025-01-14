---
sidebar_position: 49
---
# hw_host1x08_hypervisor.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/host1x/hw/hw_host1x08_hypervisor.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (c) 2022 NVIDIA Corporation.
 */

#define HOST1X_HV_SYNCPT_PROT_EN			0x1724
#define HOST1X_HV_SYNCPT_PROT_EN_CH_EN			BIT(1)
#define HOST1X_HV_CH_MLOCK_EN(x)			(0x1700 + (x * 4))
#define HOST1X_HV_CH_KERNEL_FILTER_GBUFFER(x)		(0x1710 + (x * 4))

```
