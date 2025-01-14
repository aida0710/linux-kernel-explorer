---
sidebar_position: 37
---
# dvb-frontend-event.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/userspace-api/media/dvb/dvb-frontend-event.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: GFDL-1.1-no-invariants-or-later

.. c:type:: dvb_frontend_event

***************
frontend events
***************


.. code-block:: c

     struct dvb_frontend_event {
	 fe_status_t status;
	 struct dvb_frontend_parameters parameters;
     };

```
