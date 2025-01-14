---
sidebar_position: 29
---
# pcie_quirks.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/marvell/mwifiex/pcie_quirks.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* NXP Wireless LAN device driver: PCIE and platform specific quirks */

#include "pcie.h"

#define QUIRK_FW_RST_D3COLD	BIT(0)

void mwifiex_initialize_quirks(struct pcie_service_card *card);
int mwifiex_pcie_reset_d3cold_quirk(struct pci_dev *pdev);

```
