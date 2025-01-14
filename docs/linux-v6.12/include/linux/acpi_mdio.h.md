---
sidebar_position: 7
---
# acpi_mdio.h

### ファイル情報

- パス: `linux-v6.12/include/linux/acpi_mdio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * ACPI helper for the MDIO (Ethernet PHY) API
 */

#ifndef __LINUX_ACPI_MDIO_H
#define __LINUX_ACPI_MDIO_H

#include <linux/phy.h>

#if IS_ENABLED(CONFIG_ACPI_MDIO)
int __acpi_mdiobus_register(struct mii_bus *mdio, struct fwnode_handle *fwnode,
			    struct module *owner);

static inline int
acpi_mdiobus_register(struct mii_bus *mdio, struct fwnode_handle *handle)
{
	return __acpi_mdiobus_register(mdio, handle, THIS_MODULE);
}
#else /* CONFIG_ACPI_MDIO */
static inline int
acpi_mdiobus_register(struct mii_bus *mdio, struct fwnode_handle *fwnode)
{
	/*
	 * Fall back to mdiobus_register() function to register a bus.
	 * This way, we don't have to keep compat bits around in drivers.
	 */

	return mdiobus_register(mdio);
}
#endif

#endif /* __LINUX_ACPI_MDIO_H */

```
