---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dcn301/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: MIT
# Copyright © 2024 Advanced Micro Devices, Inc. All rights reserved.
#
# Makefile for dcn30.

DCN301 = dcn301_panel_cntl.o

AMD_DAL_DCN301 = $(addprefix $(AMDDALPATH)/dc/dcn301/,$(DCN301))

AMD_DISPLAY_FILES += $(AMD_DAL_DCN301)

```
