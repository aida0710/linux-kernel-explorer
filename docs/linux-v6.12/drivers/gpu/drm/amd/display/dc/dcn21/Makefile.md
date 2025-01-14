---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dcn21/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: MIT
# Copyright © 2019-2024 Advanced Micro Devices, Inc. All rights reserved.

DCN21 = dcn21_link_encoder.o

AMD_DAL_DCN21 = $(addprefix $(AMDDALPATH)/dc/dcn21/,$(DCN21))

AMD_DISPLAY_FILES += $(AMD_DAL_DCN21)

```
