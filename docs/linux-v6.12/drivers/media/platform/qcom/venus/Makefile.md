---
sidebar_position: 28
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/qcom/venus/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for Qualcomm Venus driver

venus-core-objs += core.o helpers.o firmware.o \
		   hfi_venus.o hfi_msgs.o hfi_cmds.o hfi.o \
		   hfi_parser.o pm_helpers.o dbgfs.o \
		   hfi_platform.o hfi_platform_v4.o \
		   hfi_platform_v6.o hfi_plat_bufs_v6.o \

venus-dec-objs += vdec.o vdec_ctrls.o
venus-enc-objs += venc.o venc_ctrls.o

obj-$(CONFIG_VIDEO_QCOM_VENUS) += venus-core.o
obj-$(CONFIG_VIDEO_QCOM_VENUS) += venus-dec.o
obj-$(CONFIG_VIDEO_QCOM_VENUS) += venus-enc.o

```
