---
sidebar_position: 17
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/google/gve/Makefile`

### コンテンツ

```txt
# Makefile for the Google virtual Ethernet (gve) driver

obj-$(CONFIG_GVE) += gve.o
gve-objs := gve_main.o gve_tx.o gve_tx_dqo.o gve_rx.o gve_rx_dqo.o gve_ethtool.o gve_adminq.o gve_utils.o gve_flow_rule.o

```
