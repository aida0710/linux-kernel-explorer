---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `drivers/net/wwan/t7xx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only

obj-${CONFIG_MTK_T7XX} := mtk_t7xx.o
mtk_t7xx-y:=	t7xx_pci.o \
		t7xx_pcie_mac.o \
		t7xx_mhccif.o \
		t7xx_state_monitor.o  \
		t7xx_modem_ops.o \
		t7xx_cldma.o \
		t7xx_hif_cldma.o  \
		t7xx_port_proxy.o  \
		t7xx_port_ctrl_msg.o \
		t7xx_port_wwan.o \
		t7xx_hif_dpmaif.o  \
		t7xx_hif_dpmaif_tx.o \
		t7xx_hif_dpmaif_rx.o  \
		t7xx_dpmaif.o \
		t7xx_netdev.o

mtk_t7xx-$(CONFIG_WWAN_DEBUGFS) += \
		t7xx_port_trace.o \

```
