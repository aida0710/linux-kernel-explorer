---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/dsa/sja1105/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_NET_DSA_SJA1105) += sja1105.o

sja1105-objs := \
    sja1105_spi.o \
    sja1105_main.o \
    sja1105_mdio.o \
    sja1105_flower.o \
    sja1105_ethtool.o \
    sja1105_devlink.o \
    sja1105_clocking.o \
    sja1105_static_config.o \
    sja1105_dynamic_config.o \

ifdef CONFIG_NET_DSA_SJA1105_PTP
sja1105-objs += sja1105_ptp.o
endif

ifdef CONFIG_NET_DSA_SJA1105_TAS
sja1105-objs += sja1105_tas.o
endif

ifdef CONFIG_NET_DSA_SJA1105_VL
sja1105-objs += sja1105_vl.o
endif

```
