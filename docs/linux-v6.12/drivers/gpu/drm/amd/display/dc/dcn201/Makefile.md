---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dcn201/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: MIT
# Copyright © 2021-2024 Advanced Micro Devices, Inc. All rights reserved.

DCN201 = dcn201_mpc.o dcn201_opp.o \
	dcn201_link_encoder.o

AMD_DAL_DCN201 = $(addprefix $(AMDDALPATH)/dc/dcn201/,$(DCN201))

AMD_DISPLAY_FILES += $(AMD_DAL_DCN201)

```
