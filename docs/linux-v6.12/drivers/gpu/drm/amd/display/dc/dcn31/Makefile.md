---
sidebar_position: 9
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dcn31/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: MIT
# Copyright © 2024 Advanced Micro Devices, Inc. All rights reserved.
#
#
# Makefile for dcn31.

DCN31 = dcn31_panel_cntl.o \
	dcn31_apg.o \
	dcn31_afmt.o dcn31_vpg.o

AMD_DAL_DCN31 = $(addprefix $(AMDDALPATH)/dc/dcn31/,$(DCN31))

AMD_DISPLAY_FILES += $(AMD_DAL_DCN31)

```
