---
sidebar_position: 42
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/huawei/hinic/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_HINIC) += hinic.o

hinic-y := hinic_main.o hinic_tx.o hinic_rx.o hinic_port.o hinic_hw_dev.o \
	   hinic_hw_io.o hinic_hw_qp.o hinic_hw_cmdq.o hinic_hw_wq.o \
	   hinic_hw_mgmt.o hinic_hw_api_cmd.o hinic_hw_eqs.o hinic_hw_if.o \
	   hinic_common.o hinic_ethtool.o hinic_devlink.o hinic_hw_mbox.o \
	   hinic_sriov.o hinic_debugfs.o

```
