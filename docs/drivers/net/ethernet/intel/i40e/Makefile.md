---
sidebar_position: 39
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/intel/i40e/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Copyright(c) 2013 - 2018 Intel Corporation.

#
# Makefile for the Intel(R) Ethernet Connection XL710 (i40e.ko) driver
#

ccflags-y += -I$(src)
subdir-ccflags-y += -I$(src)

obj-$(CONFIG_I40E) += i40e.o

i40e-y := i40e_main.o \
	i40e_ethtool.o	\
	i40e_adminq.o	\
	i40e_common.o	\
	i40e_hmc.o	\
	i40e_lan_hmc.o	\
	i40e_nvm.o	\
	i40e_debugfs.o	\
	i40e_diag.o	\
	i40e_txrx.o	\
	i40e_ptp.o	\
	i40e_ddp.o \
	i40e_client.o   \
	i40e_virtchnl_pf.o \
	i40e_xsk.o	\
	i40e_devlink.o

i40e-$(CONFIG_I40E_DCB) += i40e_dcb.o i40e_dcb_nl.o

```
