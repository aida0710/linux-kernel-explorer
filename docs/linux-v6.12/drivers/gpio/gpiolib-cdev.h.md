---
sidebar_position: 193
---
# gpiolib-cdev.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpio/gpiolib-cdev.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef GPIOLIB_CDEV_H
#define GPIOLIB_CDEV_H

#include <linux/types.h>

struct gpio_device;

int gpiolib_cdev_register(struct gpio_device *gdev, dev_t devt);
void gpiolib_cdev_unregister(struct gpio_device *gdev);

#endif /* GPIOLIB_CDEV_H */

```
