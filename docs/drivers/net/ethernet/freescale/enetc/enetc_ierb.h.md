---
sidebar_position: 9
---
# enetc_ierb.h

### ファイル情報

- パス: `drivers/net/ethernet/freescale/enetc/enetc_ierb.h`

### コンテンツ

```h
/* SPDX-License-Identifier: (GPL-2.0+ OR BSD-3-Clause) */
/* Copyright 2021 NXP */

#include <linux/pci.h>
#include <linux/platform_device.h>

#if IS_ENABLED(CONFIG_FSL_ENETC_IERB)

int enetc_ierb_register_pf(struct platform_device *pdev,
			   struct pci_dev *pf_pdev);

#else

static inline int enetc_ierb_register_pf(struct platform_device *pdev,
					 struct pci_dev *pf_pdev)
{
	return -EOPNOTSUPP;
}

#endif

```
