---
sidebar_position: 41
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/chelsio/cxgb4/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Chelsio T4 driver
#

obj-$(CONFIG_CHELSIO_T4) += cxgb4.o

cxgb4-objs := cxgb4_main.o l2t.o smt.o t4_hw.o sge.o clip_tbl.o cxgb4_ethtool.o \
	      cxgb4_uld.o srq.o sched.o cxgb4_filter.o cxgb4_tc_u32.o \
	      cxgb4_ptp.o cxgb4_tc_flower.o cxgb4_cudbg.o cxgb4_mps.o \
	      cudbg_common.o cudbg_lib.o cudbg_zlib.o cxgb4_tc_mqprio.o \
	      cxgb4_tc_matchall.o
cxgb4-$(CONFIG_CHELSIO_T4_DCB) +=  cxgb4_dcb.o
cxgb4-$(CONFIG_CHELSIO_T4_FCOE) +=  cxgb4_fcoe.o
cxgb4-$(CONFIG_DEBUG_FS) += cxgb4_debugfs.o
cxgb4-$(CONFIG_THERMAL) += cxgb4_thermal.o

```
