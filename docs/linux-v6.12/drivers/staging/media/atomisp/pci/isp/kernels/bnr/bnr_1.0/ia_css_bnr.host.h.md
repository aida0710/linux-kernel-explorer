---
sidebar_position: 2
---
# ia_css_bnr.host.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/media/atomisp/pci/isp/kernels/bnr/bnr_1.0/ia_css_bnr.host.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Support for Intel Camera Imaging ISP subsystem.
 * Copyright (c) 2015, Intel Corporation.
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms and conditions of the GNU General Public License,
 * version 2, as published by the Free Software Foundation.
 *
 * This program is distributed in the hope it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
 * more details.
 */

#ifndef __IA_CSS_BNR_HOST_H
#define __IA_CSS_BNR_HOST_H

#include "sh_css_params.h"

#include "ynr/ynr_1.0/ia_css_ynr_types.h"
#include "ia_css_bnr_param.h"

void
ia_css_bnr_encode(
    struct sh_css_isp_bnr_params *to,
    const struct ia_css_nr_config *from,
    unsigned int size);

void
ia_css_bnr_dump(
    const struct sh_css_isp_bnr_params *bnr,
    unsigned int level);

#endif /* __IA_CSS_DP_HOST_H */

```
