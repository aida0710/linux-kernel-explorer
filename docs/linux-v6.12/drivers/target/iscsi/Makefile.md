---
sidebar_position: 35
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/target/iscsi/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
iscsi_target_mod-y +=		iscsi_target_parameters.o \
				iscsi_target_seq_pdu_list.o \
				iscsi_target_auth.o \
				iscsi_target_datain_values.o \
				iscsi_target_device.o \
				iscsi_target_erl0.o \
				iscsi_target_erl1.o \
				iscsi_target_erl2.o \
				iscsi_target_login.o \
				iscsi_target_nego.o \
				iscsi_target_nodeattrib.o \
				iscsi_target_tmr.o \
				iscsi_target_tpg.o \
				iscsi_target_util.o \
				iscsi_target.o \
				iscsi_target_configfs.o \
				iscsi_target_stat.o \
				iscsi_target_transport.o

obj-$(CONFIG_ISCSI_TARGET)	+= iscsi_target_mod.o
obj-$(CONFIG_ISCSI_TARGET_CXGB4) += cxgbit/

```
