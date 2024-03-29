import s from './Copyright.module.css';

const Copyright = () => {
  return (
    <p className={s.container}>
      &copy; 2024 <b>Brand Name</b> All rights reserved. Unauthorized use or
      copying of this brand is strictly prohibited. No part of this website may
      be reproduced, distributed, or transmitted in any form or by any means,
      including photocopying, recording, or other electronic or mechanical
      methods, without the prior written permission of <b>Brand Name</b>, except
      in the case of brief quotations embodied in critical reviews and certain
      other non-commercial uses permitted by copyright law.
    </p>
  );
};

export default Copyright;
