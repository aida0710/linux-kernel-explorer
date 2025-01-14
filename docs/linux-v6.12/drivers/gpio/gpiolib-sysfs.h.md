---
sidebar_position: 201
---
# gpiolib-sysfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpio/gpiolib-sysfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef GPIOLIB_SYSFS_H
#define GPIOLIB_SYSFS_H

struct gpio_device;

#ifdef CONFIG_GPIO_SYSFS

int gpiochip_sysfs_register(struct gpio_device *gdev);
void gpiochip_sysfs_unregister(struct gpio_device *gdev);

#else

static inline int gpiochip_sysfs_register(struct gpio_device *gdev)
{
	return 0;
}

static inline void gpiochip_sysfs_unregister(struct gpio_device *gdev)
{
}

#endif /* CONFIG_GPIO_SYSFS */

#endif /* GPIOLIB_SYSFS_H */

```
