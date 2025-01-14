---
sidebar_position: 45
---
# pcie.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/broadcom/brcm80211/brcmfmac/pcie.h`

### コンテンツ

```h
// SPDX-License-Identifier: ISC
/*
 * Copyright (c) 2014 Broadcom Corporation
 */
#ifndef BRCMFMAC_PCIE_H
#define BRCMFMAC_PCIE_H


struct brcmf_pciedev {
	struct brcmf_bus *bus;
	struct brcmf_pciedev_info *devinfo;
};

#endif /* BRCMFMAC_PCIE_H */

```
