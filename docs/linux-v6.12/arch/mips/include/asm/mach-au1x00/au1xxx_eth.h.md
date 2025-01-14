---
sidebar_position: 2
---
# au1xxx_eth.h

### ファイル情報

- パス: `linux-v6.12/arch/mips/include/asm/mach-au1x00/au1xxx_eth.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __AU1X00_ETH_DATA_H
#define __AU1X00_ETH_DATA_H

/* Platform specific PHY configuration passed to the MAC driver */
struct au1000_eth_platform_data {
	int phy_static_config;
	int phy_search_highest_addr;
	int phy1_search_mac0;
	int phy_addr;
	int phy_busid;
	int phy_irq;
	char mac[6];
};

void __init au1xxx_override_eth_cfg(unsigned port,
			struct au1000_eth_platform_data *eth_data);

#endif /* __AU1X00_ETH_DATA_H */

```
