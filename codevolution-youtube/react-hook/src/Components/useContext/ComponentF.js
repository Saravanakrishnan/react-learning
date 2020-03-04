import React from 'react';
import {ChannelContext, UserContext} from '../../App';

function ComponentF() {

	// Step3: Consume
	return <div>
		<UserContext.Consumer>
			{
				user => {
					return (
						<ChannelContext.Consumer>
							{
								channel => {
									return <div>User context value {user}, Channel context value {channel} </div>
								}

							}
						</ChannelContext.Consumer>
					)

				}
			}
		</UserContext.Consumer>
	</div>
}

export default ComponentF;
