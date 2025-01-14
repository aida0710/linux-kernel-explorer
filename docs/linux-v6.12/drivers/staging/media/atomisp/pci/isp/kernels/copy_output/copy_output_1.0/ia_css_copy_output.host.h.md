---
sidebar_position: 2
---
# ia_css_copy_output.host.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/media/atomisp/pci/isp/kernels/copy_output/copy_output_1.0/ia_css_copy_output.host.h`

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

#ifndef __IA_CSS_COPY_OUTPUT_HOST_H
#define __IA_CSS_COPY_OUTPUT_HOST_H

#include "type_support.h"
#include "ia_css_binary.h"

#include "ia_css_copy_output_param.h"

void
ia_css_copy_output_config(
    struct sh_css_isp_copy_output_isp_config      *to,
    const struct ia_css_copy_output_configuration *from,
    unsigned int size);

int ia_css_copy_output_configure(const struct ia_css_binary     *binary,
				 bool enable);

#endif /* __IA_CSS_COPY_OUTPUT_HOST_H */

```
