---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/dsa/sja1105/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NET_DSA_SJA1105
tristate "NXP SJA1105 Ethernet switch family support"
	depends on NET_DSA && SPI
	depends on PTP_1588_CLOCK_OPTIONAL
	select NET_DSA_TAG_SJA1105
	select PCS_XPCS
	select PACKING
	select CRC32
	help
	  This is the driver for the NXP SJA1105 (5-port) and SJA1110 (10-port)
	  automotive Ethernet switch family. These are managed over an SPI
	  interface. Probing is handled based on OF bindings and so is the
	  linkage to PHYLINK. The driver supports the following revisions:
	    - SJA1105E (Gen. 1, No TT-Ethernet)
	    - SJA1105T (Gen. 1, TT-Ethernet)
	    - SJA1105P (Gen. 2, No SGMII, No TT-Ethernet)
	    - SJA1105Q (Gen. 2, No SGMII, TT-Ethernet)
	    - SJA1105R (Gen. 2, SGMII, No TT-Ethernet)
	    - SJA1105S (Gen. 2, SGMII, TT-Ethernet)
	    - SJA1110A (Gen. 3, SGMII, TT-Ethernet, 100base-TX PHY, 10 ports)
	    - SJA1110B (Gen. 3, SGMII, TT-Ethernet, 100base-TX PHY, 9 ports)
	    - SJA1110C (Gen. 3, SGMII, TT-Ethernet, 100base-TX PHY, 7 ports)
	    - SJA1110D (Gen. 3, SGMII, TT-Ethernet, no 100base-TX PHY, 7 ports)

config NET_DSA_SJA1105_PTP
	bool "Support for the PTP clock on the NXP SJA1105 Ethernet switch"
	depends on NET_DSA_SJA1105
	depends on PTP_1588_CLOCK
	help
	  This enables support for timestamping and PTP clock manipulations in
	  the SJA1105 DSA driver.

config NET_DSA_SJA1105_TAS
	bool "Support for the Time-Aware Scheduler on NXP SJA1105"
	depends on NET_DSA_SJA1105 && NET_SCH_TAPRIO
	depends on NET_SCH_TAPRIO=y || NET_DSA_SJA1105=m
	depends on NET_DSA_SJA1105_PTP
	help
	  This enables support for the TTEthernet-based egress scheduling
	  engine in the SJA1105 DSA driver, which is controlled using a
	  hardware offload of the tc-tqprio qdisc.

config NET_DSA_SJA1105_VL
	bool "Support for Virtual Links on NXP SJA1105"
	depends on NET_DSA_SJA1105_TAS
	help
	  This enables support for flow classification using capable devices
	  (SJA1105T, SJA1105Q, SJA1105S). The following actions are supported:
	  - redirect, trap, drop
	  - time-based ingress policing, via the tc-gate action

```
