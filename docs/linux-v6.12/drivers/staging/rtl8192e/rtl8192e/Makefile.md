---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8192e/rtl8192e/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
r8192e_pci-objs :=		\
	r8192E_dev.o		\
	r8192E_phy.o		\
	r8192E_firmware.o	\
	r8192E_cmdpkt.o		\
	table.o			\
	r8190P_rtl8256.o	\
	rtl_cam.o		\
	rtl_core.o		\
	rtl_dm.o		\
	rtl_eeprom.o		\
	rtl_ethtool.o		\
	rtl_pci.o		\
	rtl_pm.o		\
	rtl_ps.o		\
	rtl_wx.o		\

obj-$(CONFIG_RTL8192E) += r8192e_pci.o

```
