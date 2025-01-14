---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/amd/xgbe/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_AMD_XGBE) += amd-xgbe.o

amd-xgbe-objs := xgbe-main.o xgbe-drv.o xgbe-dev.o \
		 xgbe-desc.o xgbe-ethtool.o xgbe-mdio.o \
		 xgbe-ptp.o \
		 xgbe-i2c.o xgbe-phy-v1.o xgbe-phy-v2.o \
		 xgbe-platform.o

amd-xgbe-$(CONFIG_PCI) += xgbe-pci.o
amd-xgbe-$(CONFIG_AMD_XGBE_DCB) += xgbe-dcb.o
amd-xgbe-$(CONFIG_DEBUG_FS) += xgbe-debugfs.o

```
