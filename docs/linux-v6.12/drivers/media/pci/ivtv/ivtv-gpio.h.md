---
sidebar_position: 16
---
# ivtv-gpio.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/pci/ivtv/ivtv-gpio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
    gpio functions.
    Copyright (C) 2004  Chris Kennedy <c@groovy.org>
    Copyright (C) 2005-2007  Hans Verkuil <hverkuil@xs4all.nl>

 */

#ifndef IVTV_GPIO_H
#define IVTV_GPIO_H

/* GPIO stuff */
int ivtv_gpio_init(struct ivtv *itv);
void ivtv_reset_ir_gpio(struct ivtv *itv);
int ivtv_reset_tuner_gpio(void *dev, int component, int cmd, int value);

#endif

```
