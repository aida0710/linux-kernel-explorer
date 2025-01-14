---
sidebar_position: 41
---
# of.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/broadcom/brcm80211/brcmfmac/of.h`

### コンテンツ

```h
// SPDX-License-Identifier: ISC
/*
 * Copyright (c) 2014 Broadcom Corporation
 */
#ifdef CONFIG_OF
void brcmf_of_probe(struct device *dev, enum brcmf_bus_type bus_type,
		    struct brcmf_mp_device *settings);
#else
static void brcmf_of_probe(struct device *dev, enum brcmf_bus_type bus_type,
			   struct brcmf_mp_device *settings)
{
}
#endif /* CONFIG_OF */

```
